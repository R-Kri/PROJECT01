import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// Importing routes
import authRoute from './routes/auth.js';
import hotelRoute from './routes/hotels.js';
import userRoute from './routes/users.js';
import roomRoute from './routes/rooms.js';
import flightRoute from './routes/flights.js';
import tourPackageRoute from './routes/tourPackage.js';
import morgan from 'morgan';
// Load environment variables
dotenv.config();

// App initialization
const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // If you're using cookies or sessions
  })
);

app.use(morgan('dev'));
// Middleware
app.use(express.json());
app.use(cookieParser());

// Database connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Mounting routes
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/flights", flightRoute);
app.use("/api/tourPackage", tourPackageRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Start the server
const startServer = async () => {
  await connectDB(); 
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

// Graceful shutdown
process.on("SIGINT", () => {
  server.close(() => {
      console.log("Server closed");
      process.exit(0);
  });
});


startServer();

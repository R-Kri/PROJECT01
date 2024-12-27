import mongoose from "mongoose";
const {Schema} = mongoose;

const FlightSchema = new mongoose.Schema({
    flightNumber:{
        type: Number,
        required: true,
    },
    airline:{
        type: String,
        required: true,
    },
    departure: { 
        type: String, 
        required: true 
    },
    destination: { 
        type: String, 
        required: true },
    price: { 
        type: Number, 
        required: true 
    },
    departureTime: { 
        type: Date, 
        required: true 
    },
    arrivalTime: { 
        type: Date, 
        required: true 
    },
    availableSeats: { 
        type: Number, 
        required: true 
    },
}, { timestamps: true });

export default mongoose.model("Flight", FlightSchema);
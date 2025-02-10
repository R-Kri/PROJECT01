import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelPage from "./components/HotelPage/HotelPage";
import HomePage from "./components/HomePage/HomePage";
import TourPage from "./components/TourPage/TourPage";
import LoginRegisterDialog from "./components/Login/LoginRegisterDialog";
import AdminLayout from "./components/Admin/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import FlightManagement from "./components/Admin/FlightManagement";
import HotelManagement from "./components/Admin/HotelManagement";
import PackageManagement from "./components/Admin/PackageManagement";
import "./App.css"; // Ensure CSS file is imported
import { SignedOut, SignInButton, SignUp } from "@clerk/clerk-react";
import Footer from "./components/HomePage/Footer";

const App = () => {
  return (
    <Router>
      <div className="app-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/login" element={<LoginRegisterDialog />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="flights" element={<FlightManagement />} />
            <Route path="hotels" element={<HotelManagement />} />
            <Route path="packages" element={<PackageManagement />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

      </div>
      <div className="page-content">
        {/* This area will be white and will take up 30% of the screen */}
      </div>
    </Router>
  );
};

export default App;

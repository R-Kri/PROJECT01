import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HotelPage from "./components/HotelPage/HotelPage"
import HomePage from "./components/HomePage/HomePage"
import TourPage from "./components/TourPage/TourPage"
import LoginRegisterDialog from "./components/Login/LoginRegisterDialog"
import AdminLayout from "./components/Admin/AdminLayout"
import Dashboard from "./components/Admin/Dashboard"
import FlightManagement from "./components/Admin/FlightManagement"
import HotelManagement from "./components/Admin/HotelManagement"
import PackageManagement from "./components/Admin/PackageManagement"

// Sample initial data (you would typically fetch this from an API)
const initialFlights = [
  { id: 1, flightNumber: "FL001", origin: "New York", destination: "London", departureTime: "2023-07-01T10:00" },
  { id: 2, flightNumber: "FL002", origin: "Paris", destination: "Tokyo", departureTime: "2023-07-02T14:30" },
  { id: 3, flightNumber: "FL003", origin: "Sydney", destination: "Dubai", departureTime: "2023-07-03T22:15" },
]

const initialHotels = [
  { id: 1, name: "Grand Hotel", location: "New York", pricePerNight: 200 },
  { id: 2, name: "Seaside Resort", location: "Maldives", pricePerNight: 500 },
  { id: 3, name: "Mountain Lodge", location: "Swiss Alps", pricePerNight: 300 },
]

const initialPackages = [
  { id: 1, name: "European Adventure", destination: "Multiple", duration: 14, price: 3000 },
  { id: 2, name: "Tropical Paradise", destination: "Bali", duration: 7, price: 1500 },
  { id: 3, name: "Historical Journey", destination: "Egypt", duration: 10, price: 2000 },
]

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/login" element={<LoginRegisterDialog />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="flights" element={<FlightManagement initialFlights={initialFlights} />} />
          <Route path="hotels" element={<HotelManagement initialHotels={initialHotels} />} />
          <Route path="packages" element={<PackageManagement initialPackages={initialPackages} />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App


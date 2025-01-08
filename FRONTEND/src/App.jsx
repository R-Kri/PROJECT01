import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelPage from './components/HotelPage/HotelPage';
import HomePage from './components/HomePage/HomePage';
import TourPage from './components/TourPage/TourPage';
import LoginRegisterForm from './components/Login/LoginRegister'

const App = () => {
  return (
    <Router>
    <Routes>
      {/* Define Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/hotel" element={<HotelPage />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/login" element={<LoginRegisterForm/>} />
    </Routes>
  </Router>
  )
}

export default App
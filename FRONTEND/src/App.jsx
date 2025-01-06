import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourPage from './components/HomePage/TourPage'
import HomePage from './components/HomePage/HomePage'
import HotelPage from './components/HomePage/HotelPage'

const App = () => {
  return (
    <Router>
    <Routes>
      {/* Define Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/hotel" element={<HotelPage />} />
      <Route path="/tour" element={<TourPage />} />
    </Routes>
  </Router>
  )
}

export default App
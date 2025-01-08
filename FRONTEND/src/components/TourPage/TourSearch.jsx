import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HotelCity from "../HotelPage/HotelCity";

const TourSearch = () => {
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [fromCity, setFromCity] = useState({
    code: "DEL",
    name: "Delhi",
    airport: "Indira Gandhi International Airport",
  });
  const [toCity, setToCity] = useState({
    code: "BLR",
    name: "Bengaluru",
    airport: "Bengaluru International Airport",
  });

  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const cities = [
    { code: "BLR", name: "Bengaluru", airport: "Bengaluru International Airport" },
    { code: "DEL", name: "Delhi", airport: "Indira Gandhi International Airport" },
    { code: "BOM", name: "Mumbai", airport: "Chhatrapati Shivaji Maharaj International Airport" },
    { code: "MAA", name: "Chennai", airport: "Chennai International Airport" },
    { code: "HYD", name: "Hyderabad", airport: "Rajiv Gandhi International Airport" },
  ];

  const handleFromCityClick = (city) => {
    setFromCity(city);
    setShowFromDropdown(false);
  };

  const handleToCityClick = (city) => {
    setToCity(city);
    setShowToDropdown(false);
  };

  return (
    <div className="rounded-lg mt-4 mx-5 flex space-x-5 border-solid border-2 border-gray-300  my-8" >
      {/* From City */}
      <div className="w-1/5 px-6 py-6 border-solid border-r-2 border-gray-300 relative">
        <label htmlFor="fromCity" className="block">
          <span className="text-gray-700">FROM</span>
          <HotelCity
            city={fromCity}
            showDropdown={showFromDropdown}
            setShowDropdown={setShowFromDropdown}
            onCityClick={handleFromCityClick}
            cities={cities}
          />
        </label>
      </div>

      {/* To City */}
      <div className="w-1/5 px-6 py-6 border-solid border-r-2 border-gray-300 relative">
        <label htmlFor="toCity" className="block">
          <span className="text-gray-700">TO</span>
          <HotelCity
            city={fromCity}
            showDropdown={showToDropdown}
            setShowDropdown={setShowToDropdown}
            onCityClick={handleToCityClick}
            cities={cities}
          />
        </label>
      </div>

      {/* Departure Box */}
      <div className="w-1/5 px-4 py-6 border-solid border-r-2 z-30 border-gray-300 relative">
        <span className="text-gray-700">Departure</span>
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
          placeholderText="Select Date"
          className="cursor-pointer font-bold text-2xl mt-1 w-full focus:ring focus:ring-blue-300 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Return Box */}
      <div className="w-1/5 px-4 py-6 border-solid border-r-2 z-30 border-gray-300 relative">
        <span className="text-gray-700 ">Return</span>
        <DatePicker
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          placeholderText="Select return date"
          className="cursor-pointer font-bold text-2xl mt-1 w-full focus:ring focus:ring-blue-300 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Travellers & Class */}
      <div className="w-1/4 px-4 py-6">
            <span className="text-gray-700">Rooms & Guests</span>
            <h1 className="font-bold text-lg mt-1">1 Room, 2 Adults</h1>
          </div>
      </div>
  );
};

export default TourSearch;

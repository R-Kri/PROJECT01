import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HotelContainer = () => {
  const [roomTypes, setRoomTypes] = useState("four");
  const [showDropdown, setShowDropdown] = useState(false);
  const [city, setCity] = useState({ name: "Delhi", address: "India" });
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const cities = [
    { name: "Bengaluru", address: "India" },
    { name: "Delhi", address: "India" },
    { name: "Mumbai", address: "India" },
    { name: "Chennai", address: "India" },
    { name: "Hyderabad", address: "India" },
  ];

  const handleRooms = (value) => setRoomTypes(value);
  const handleCityClick = (city) => {
    setCity(city);
    setShowDropdown(false);
  };

  return (
    <div className="w-[100%] -mb-10 -mt-11 bg-white flex align-center relative justify-center flex-col rounded-xl px-6 py-14">
      <div>
        {/* Room Types */}
        <ul className="flex gap-4 mb-6">
          <li
            className={`${
              roomTypes === "four"
                ? "bg-blue-300 rounded-xl px-2 font-semibold"
                : ""
            } cursor-pointer flex items-center`}
            onClick={() => handleRooms("four")}
          >
            <input
              type="radio"
              name="rooms"
              id="rooms-four"
              checked={roomTypes === "four"}
              onChange={() => handleRooms("four")}
              className="mr-1"
            />
            <label htmlFor="rooms-four" className="px-2">
              Up to 4 Rooms
            </label>
          </li>
          <li
            className={`${
              roomTypes === "group"
                ? "bg-blue-300 rounded-xl px-2 font-semibold"
                : ""
            } cursor-pointer flex items-center`}
            onClick={() => handleRooms("group")}
          >
            <input
              type="radio"
              name="rooms"
              id="rooms-group"
              checked={roomTypes === "group"}
              onChange={() => handleRooms("group")}
              className="mr-1"
            />
            <label htmlFor="rooms-group" className="px-2">
              Group Deals
            </label>
          </li>
        </ul>

        {/* Search Fields Container */}
        <div className="rounded-lg border-2 border-gray-300 flex space-x-4">
          {/* City Selection */}
          <div className="w-2/5 px-5 py-4 border-r-2  border-gray-300 relative pr-2">
            <span className="text-gray-700">
              City, Property Name, or Location
            </span>
            <div
              className="cursor-pointer font-bold text-lg mt-1 focus:ring focus:ring-blue-300"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="block text-2xl">{city.name}</span>
              <span className="block text-sm text-gray-700 font-normal">
                {city.address}
              </span>
            </div>
            {showDropdown && (
              <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full max-h-60 overflow-auto shadow-lg  z-20">
                {cities.map((cityItem) => (
                  <div
                    key={cityItem.name}
                    className="p-2 hover:bg-gray-100 cursor-pointer "
                    onClick={() => handleCityClick(cityItem)}
                  >
                    <span className="font-semibold">{cityItem.name}</span>
                    <span className="block text-sm font-normal text-gray-500">
                      {cityItem.address}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Departure Date */}
          <div className="w-1/4 px-4 py-4 border-r-2 border-gray-300">
            <span className="text-gray-700">Check-In</span>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              placeholderText="Select Date"
              className="cursor-pointer font-bold text-lg mt-1 w-full focus:ring focus:ring-blue-300 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Return Date */}
          <div className="w-1/4 px-4 py-4 border-r-2 border-gray-300">
            <span className="text-gray-700">Check-Out</span>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              placeholderText="Select Date"
              className="cursor-pointer font-bold text-lg mt-1 w-full focus:ring focus:ring-blue-300 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Travelers */}
          <div className="w-1/4 px-4 py-2">
            <span className="text-gray-700">Rooms & Guests</span>
            <h1 className="font-bold text-lg mt-1">1 Room, 2 Adults</h1>
          </div>
        </div>

        {/* Trending Searches */}
        <div className="text-center mt-4">
          <p>Trending Searches: Mumbai, India</p>
        </div>
      </div>
    </div>
  );
};

export default HotelContainer;

"use client"

import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react"

const TourSearch = () => {
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  const [fromCity, setFromCity] = useState({
    code: "DEL",
    name: "Delhi",
    airport: "Indira Gandhi International Airport",
  })
  const [toCity, setToCity] = useState({
    code: "BLR",
    name: "Bengaluru",
    airport: "Bengaluru International Airport",
  })
  const [departureDate, setDepartureDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [showGuestsMenu, setShowGuestsMenu] = useState(false)
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
  })
  const [rooms, setRooms] = useState(1)

  const cities = [
    { code: "BLR", name: "Bengaluru", airport: "Bengaluru International Airport" },
    { code: "DEL", name: "Delhi", airport: "Indira Gandhi International Airport" },
    { code: "BOM", name: "Mumbai", airport: "Chhatrapati Shivaji Maharaj International Airport" },
    { code: "MAA", name: "Chennai", airport: "Chennai International Airport" },
    { code: "HYD", name: "Hyderabad", airport: "Rajiv Gandhi International Airport" },
  ]

  const handleFromCityClick = (city) => {
    if (city.code === toCity.code) {
      setToCity(fromCity)
    }
    setFromCity(city)
    setShowFromDropdown(false)
  }

  const handleToCityClick = (city) => {
    if (city.code === fromCity.code) {
      setFromCity(toCity)
    }
    setToCity(city)
    setShowToDropdown(false)
  }

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date)
    if (returnDate && date > returnDate) {
      setReturnDate(null)
    }
  }

  const getTotalGuests = () => {
    return guests.adults + guests.children
  }

  const updateGuests = (type, increment) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(type === "adults" ? 1 : 0, Math.min(6, prev[type] + (increment ? 1 : -1))),
    }))
  }

  const updateRooms = (increment) => {
    setRooms((prev) => Math.max(1, Math.min(5, prev + (increment ? 1 : -1))))
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="flex align-center  justify-center ">
    <div className="bg-white rounded-xl w-[95%] shadow-lg px-7 py-2">
      <div className="flex items-center space-x-4 m-4 px-2">
        {/* From City */}
        <div className="relative flex-1 min-w-[200px]">
          <label className="block text-xs font-medium text-gray-600 mb-1">FROM</label>
          <div
            className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
            onClick={() => {
              setShowFromDropdown(!showFromDropdown)
              setShowToDropdown(false)
              setShowGuestsMenu(false)
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">{fromCity.code}</div>
                <div className="text-xs text-gray-600">{fromCity.name}</div>
              </div>
              <MapPin className="text-blue-500 h-4 w-4" />
            </div>
          </div>
          {showFromDropdown && (
            <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {cities.map((city) => (
                <div
                  key={city.code}
                  className={`p-2 cursor-pointer hover:bg-blue-50 ${city.code === toCity.code ? "opacity-50" : ""}`}
                  onClick={() => handleFromCityClick(city)}
                >
                  <div className="font-bold">{city.code}</div>
                  <div className="text-xs">{city.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* To City */}
        <div className="relative flex-1 min-w-[200px]">
          <label className="block text-xs font-medium text-gray-600 mb-1">TO</label>
          <div
            className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
            onClick={() => {
              setShowToDropdown(!showToDropdown)
              setShowFromDropdown(false)
              setShowGuestsMenu(false)
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">{toCity.code}</div>
                <div className="text-xs text-gray-600">{toCity.name}</div>
              </div>
              <MapPin className="text-blue-500 h-4 w-4" />
            </div>
          </div>
          {showToDropdown && (
            <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {cities.map((city) => (
                <div
                  key={city.code}
                  className={`p-2 cursor-pointer hover:bg-blue-50 ${city.code === fromCity.code ? "opacity-50" : ""}`}
                  onClick={() => handleToCityClick(city)}
                >
                  <div className="font-bold">{city.code}</div>
                  <div className="text-xs">{city.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Departure Date */}
        <div className="relative flex-0.5 min-w-[150px] z-30">
          <label className="block text-xs font-medium text-gray-600 mb-1">DEPARTURE</label>
          <div className="relative">
            <DatePicker
              selected={departureDate}
              onChange={handleDepartureDateChange}
              minDate={today}
              placeholderText="Select date"
              className="w-full p-2 border rounded-lg cursor-pointer hover:border-blue-500 text-sm"
              dateFormat="dd MMM yyyy"
            />
            <Calendar className="absolute right-2 top-2 text-blue-500 h-4 w-4" />
          </div>
        </div>

        {/* Return Date */}
        <div className="relative flex-0.5 min-w-[150px] z-30">
          <label className="block text-xs font-medium text-gray-600 mb-1">RETURN</label>
          <div className="relative">
            <DatePicker
              selected={returnDate}
              onChange={setReturnDate}
              minDate={departureDate || today}
              placeholderText="Select date"
              className="w-full p-2 border rounded-lg cursor-pointer hover:border-blue-500 text-sm"
              dateFormat="dd MMM yyyy"
            />
            <Calendar className="absolute right-2 top-2 text-blue-500 h-4 w-4" />
          </div>
        </div>

        {/* Rooms & Guests */}
        <div className="relative flex-1 min-w-[200px]">
          <label className="block text-xs font-medium text-gray-600 mb-1">ROOMS & GUESTS</label>
          <div
            className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
            onClick={() => {
              setShowGuestsMenu(!showGuestsMenu)
              setShowFromDropdown(false)
              setShowToDropdown(false)
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold">
                  {rooms} Room, {getTotalGuests()} Guest(s)
                </div>
              </div>
              <Users className="text-blue-500 h-4 w-4" />
            </div>
          </div>
          {showGuestsMenu && (
            <div className="absolute z-20 right-0 mt-1 bg-white border rounded-lg shadow-lg p-4 w-72">
              {/* Room Selection */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium">Rooms</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateRooms(false)}
                    className="px-2 py-1 border rounded-lg text-sm"
                    disabled={rooms <= 1}
                  >
                    -
                  </button>
                  <span className="w-4 text-center text-sm">{rooms}</span>
                  <button
                    onClick={() => updateRooms(true)}
                    className="px-2 py-1 border rounded-lg text-sm"
                    disabled={rooms >= 5}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Guests Selection */}
              <div className="space-y-3">
                {[
                  { type: "adults", label: "Adults", subtitle: "12+ years" },
                  { type: "children", label: "Children", subtitle: "2-11 years" },
                ].map(({ type, label, subtitle }) => (
                  <div key={type} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{label}</div>
                      <div className="text-xs text-gray-500">{subtitle}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateGuests(type, false)}
                        className="px-2 py-1 border rounded-lg text-sm"
                        disabled={type === "adults" ? guests[type] <= 1 : guests[type] <= 0}
                      >
                        -
                      </button>
                      <span className="w-4 text-center text-sm">{guests[type]}</span>
                      <button
                        onClick={() => updateGuests(type, true)}
                        className="px-2 py-1 border rounded-lg text-sm"
                        disabled={guests[type] >= 6}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default TourSearch


import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Building2, Calendar, Users, MapPin } from "lucide-react"

const HotelSearch = () => {
  const [roomTypes, setRoomTypes] = useState("four")
  const [showCityDropdown, setShowCityDropdown] = useState(false)
  const [showGuestDropdown, setShowGuestDropdown] = useState(false)
  const [city, setCity] = useState({ name: "Delhi", address: "India", trending: true })
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [rooms, setRooms] = useState([{ adults: 2, children: 0, childrenAges: [] }])

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    handleCheckInChange(today)
    setCheckOut(tomorrow)
  }, [])

  const cities = [
    { name: "Mumbai", address: "Maharashtra, India", trending: true },
    { name: "Delhi", address: "New Delhi, India", trending: true },
    { name: "Bengaluru", address: "Karnataka, India", trending: false },
    { name: "Goa", address: "West India", trending: true },
    { name: "Chennai", address: "Tamil Nadu, India", trending: false },
    { name: "Hyderabad", address: "Telangana, India", trending: false },
    { name: "Jaipur", address: "Rajasthan, India", trending: true },
    { name: "Udaipur", address: "Rajasthan, India", trending: true },
  ]

  const handleCityClick = (selectedCity) => {
    setCity(selectedCity)
    setShowCityDropdown(false)
  }

  const handleCheckInChange = (date) => {
    setCheckIn(date)
    if (checkOut && date >= checkOut) {
      const nextDay = new Date(date)
      nextDay.setDate(nextDay.getDate() + 1)
      setCheckOut(nextDay)
    }
  }

  const updateRoom = (roomIndex, field, value) => {
    setRooms((prevRooms) => {
      const newRooms = [...prevRooms]
      if (field === "children") {
        const prevChildren = newRooms[roomIndex].children
        newRooms[roomIndex] = {
          ...newRooms[roomIndex],
          children: value,
          childrenAges:
            value > prevChildren
              ? [...newRooms[roomIndex].childrenAges, 0]
              : newRooms[roomIndex].childrenAges.slice(0, value),
        }
      } else {
        newRooms[roomIndex] = {
          ...newRooms[roomIndex],
          [field]: value,
        }
      }
      return newRooms
    })
  }

  const addRoom = () => {
    if (rooms.length < 4) {
      setRooms([...rooms, { adults: 1, children: 0, childrenAges: [] }])
    }
  }

  const removeRoom = (index) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== index))
    }
  }

  const getTotalGuests = () => {
    return rooms.reduce((total, room) => total + room.adults + room.children, 0)
  }

  const getRoomSummary = () => {
    const totalRooms = rooms.length
    const totalGuests = getTotalGuests()
    return `${totalRooms} Room${totalRooms > 1 ? "s" : ""}, ${totalGuests} Guest${totalGuests > 1 ? "s" : ""}`
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="bg-white w-full rounded-xl -mt-10 -mb-10 shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="space-y-5 py-8">
        {/* Room Type Selection */}
        <ul className="flex flex-wrap gap-4 justify-center sm:justify-start">
          <li
            className={`${roomTypes === "four" ? "bg-blue-300 font-semibold" : ""} rounded-full pr-2 cursor-pointer transition-colors duration-200`}
            onClick={() => setRoomTypes("four")}
          >
            <span className="flex items-center px-2 py-2">
              <input
                type="radio"
                checked={roomTypes === "four"}
                onChange={() => setRoomTypes("four")}
                className="mr-1"
              />
              <Building2 className="h-4 w-4 mr-2" />
              Up to 4 Rooms
            </span>
          </li>
          <li
            className={`${roomTypes === "group" ? "bg-blue-300 font-semibold" : ""} rounded-full pr-2 cursor-pointer transition-colors duration-200`}
            onClick={() => setRoomTypes("group")}
          >
            <span className="flex items-center px-2 py-2">
              <input
                type="radio"
                checked={roomTypes === "group"}
                onChange={() => setRoomTypes("group")}
                className="mr-2"
              />
              <Users className="h-4 w-4 mr-2" />
              Group Deals
            </span>
          </li>
        </ul>
        <div className="component">
        {/* Main Search Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 border-solid rounded-lg shadow-lg">
          {/* City Selection */}
          <div className="relative z-30">
            <label className="block text-xs font-medium text-gray-600 mb-1">CITY OR PROPERTY</label>
            <div
              className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
              onClick={() => {
                setShowCityDropdown(!showCityDropdown)
                setShowGuestDropdown(false)
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{city.name}</div>
                  <div className="text-xs text-gray-600">{city.address}</div>
                </div>
                <MapPin className="text-blue-500 h-4 w-4" />
              </div>
            </div>
            {showCityDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
                <div className="p-2 bg-gray-50 border-b">
                  <div className="text-sm font-medium text-gray-600">Trending Destinations</div>
                </div>
                {cities.map((cityItem) => (
                  <div
                    key={cityItem.name}
                    className="p-3 cursor-pointer hover:bg-blue-50 flex items-center justify-between"
                    onClick={() => handleCityClick(cityItem)}
                  >
                    <div>
                      <div className="font-bold">{cityItem.name}</div>
                      <div className="text-xs text-gray-600">{cityItem.address}</div>
                    </div>
                    {cityItem.trending && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Trending</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Check-in Date */}
          <div className="relative z-30">
            <label className="block text-xs font-medium text-gray-600 mb-1">CHECK IN</label>
            <div className="relative">
              <DatePicker
                selected={checkIn}
                onChange={handleCheckInChange}
                minDate={today}
                placeholderText="Select date"
                className="w-full p-2 border rounded-lg cursor-pointer hover:border-blue-500 text-sm"
                dateFormat="dd MMM yyyy"
              />
              <Calendar className="absolute right-2 top-2 text-blue-500 h-4 w-4" />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="relative z-30">
            <label className="block text-xs font-medium text-gray-600 mb-1">CHECK OUT</label>
            <div className="relative">
              <DatePicker
                selected={checkOut}
                onChange={setCheckOut}
                minDate={checkIn || today}
                placeholderText="Select date"
                className="w-full p-2 border rounded-lg cursor-pointer hover:border-blue-500 text-sm"
                dateFormat="dd MMM yyyy"
              />
              <Calendar className="absolute right-2 top-2 text-blue-500 h-4 w-4" />
            </div>
          </div>

          {/* Guest Selection */}
          <div className="relative z-30">
            <label className="block text-xs font-medium text-gray-600 mb-1">GUESTS</label>
            <div
              className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
              onClick={() => {
                setShowGuestDropdown(!showGuestDropdown)
                setShowCityDropdown(false)
              }}
            >
              <div className="flex justify-between items-center">
                <div className="text-sm">{getRoomSummary()}</div>
                <Users className="text-blue-500 h-4 w-4" />
              </div>
            </div>
            {showGuestDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
                {rooms.map((room, index) => (
                  <div key={index} className="p-4 border-b">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Room {index + 1}</h3>
                      {index > 0 && (
                        <button onClick={() => removeRoom(index)} className="text-red-500 text-sm">
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Adults</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateRoom(index, "adults", Math.max(1, room.adults - 1))}
                            className="px-2 py-1 border rounded"
                          >
                            -
                          </button>
                          <span>{room.adults}</span>
                          <button
                            onClick={() => updateRoom(index, "adults", Math.min(4, room.adults + 1))}
                            className="px-2 py-1 border rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Children</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateRoom(index, "children", Math.max(0, room.children - 1))}
                            className="px-2 py-1 border rounded"
                          >
                            -
                          </button>
                          <span>{room.children}</span>
                          <button
                            onClick={() => updateRoom(index, "children", Math.min(2, room.children + 1))}
                            className="px-2 py-1 border rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {rooms.length < 4 && (
                  <div className="p-4 text-blue-600 cursor-pointer hover:bg-blue-50" onClick={addRoom}>
                    + Add Room
                  </div>
                )}
              </div>
              
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelSearch


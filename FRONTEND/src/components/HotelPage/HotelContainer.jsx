import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Building2, Calendar, Users, Search, MapPin } from "lucide-react";

const HotelSearch = () => {
  const [roomTypes, setRoomTypes] = useState("four");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [city, setCity] = useState({ 
    name: "Delhi", 
    address: "India",
    trending: true 
  });
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [rooms, setRooms] = useState([
    {
      adults: 2,
      children: 0,
      childrenAges: []
    }
  ]);

  const cities = [
    { name: "Mumbai", address: "Maharashtra, India", trending: true },
    { name: "Delhi", address: "New Delhi, India", trending: true },
    { name: "Bengaluru", address: "Karnataka, India", trending: false },
    { name: "Goa", address: "West India", trending: true },
    { name: "Chennai", address: "Tamil Nadu, India", trending: false },
    { name: "Hyderabad", address: "Telangana, India", trending: false },
    { name: "Jaipur", address: "Rajasthan, India", trending: true },
    { name: "Udaipur", address: "Rajasthan, India", trending: true }
  ];

  const handleCityClick = (selectedCity) => {
    setCity(selectedCity);
    setShowCityDropdown(false);
  };

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    if (checkOut && date >= checkOut) {
      // If check-in date is after check-out date, set check-out to next day
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay);
    }
  };

  const updateRoom = (roomIndex, field, value) => {
    setRooms(prevRooms => {
      const newRooms = [...prevRooms];
      if (field === 'children') {
        const prevChildren = newRooms[roomIndex].children;
        newRooms[roomIndex] = {
          ...newRooms[roomIndex],
          children: value,
          childrenAges: value > prevChildren
            ? [...newRooms[roomIndex].childrenAges, 0]
            : newRooms[roomIndex].childrenAges.slice(0, value)
        };
      } else {
        newRooms[roomIndex] = {
          ...newRooms[roomIndex],
          [field]: value
        };
      }
      return newRooms;
    });
  };

  const addRoom = () => {
    if (rooms.length < 4) {
      setRooms([...rooms, { adults: 1, children: 0, childrenAges: [] }]);
    }
  };

  const removeRoom = (index) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== index));
    }
  };

  const getTotalGuests = () => {
    return rooms.reduce((total, room) => 
      total + room.adults + room.children, 0
    );
  };

  const getRoomSummary = () => {
    const totalRooms = rooms.length;
    const totalGuests = getTotalGuests();
    return `${totalRooms} Room${totalRooms > 1 ? 's' : ''}, ${totalGuests} Guest${totalGuests > 1 ? 's' : ''}`;
  };

  // Get today's date at midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-7 w-[95%] -mt-8 -mb-9">
      {/* Room Type Selection */}
      <ul className="flex mt-4 space-x-4 bg-white p-4 rounded-lg items-center">
  <li
    className={`${
      roomTypes === "four"
        ? "bg-blue-300 rounded-xl pr-2 font-semibold"
        : ""
    } cursor-pointer`}
    onClick={() => setRoomTypes("four")}
  >
    <span className="inline-block px-2 flex items-center">
      <input
        type="radio"
        checked={roomTypes === "four"}
        onChange={() => setRoomTypes("four")}
        className="bg-cyan-100 font-bold px-2 rounded-md"
      />
      <Building2 className="h-4 w-4 ml-2 mr-2" />
      Up to 4 Rooms
    </span>
  </li>
  <li
    className={`${
      roomTypes === "group"
        ? "bg-blue-300 rounded-xl pr-2 font-semibold"
        : ""
    } cursor-pointer`}
    onClick={() => setRoomTypes("group")}
  >
    <span className="inline-block px-2 flex items-center">
      <input
        type="radio"
        checked={roomTypes === "group"}
        onChange={() => setRoomTypes("group")}
        className="bg-cyan-100 font-bold px-2 rounded-md"
      />
      <Users className="h-4 w-4 ml-2 mr-2" />
      Group Deals
    </span>
  </li>
</ul>


      {/* Main Search Bar */}
      <div className="flex items-center space-x-4 p-6 shadow-lg">
        {/* City Selection */}
        <div className="relative flex-1 min-w-[300px]">
          <label className="block text-xs font-medium text-gray-600 mb-1">CITY OR PROPERTY</label>
          <div
            className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
            onClick={() => {
              setShowCityDropdown(!showCityDropdown);
              setShowGuestDropdown(false);
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
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Trending
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Check-in Date */}
        <div className="relative flex-0.5 min-w-[180px] z-30">
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
        <div className="relative flex-0.5 min-w-[180px] z-30">
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

        {/* Rooms & Guests */}
        <div className="relative flex-1 min-w-[200px]">
          <label className="block text-xs font-medium text-gray-600 mb-1">ROOMS & GUESTS</label>
          <div
            className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
            onClick={() => {
              setShowGuestDropdown(!showGuestDropdown);
              setShowCityDropdown(false);
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold">{getRoomSummary()}</div>
                <div className="text-xs text-gray-600">
                  {roomTypes === "four" ? "Up to 4 rooms" : "Group booking"}
                </div>
              </div>
              <Users className="text-blue-500 h-4 w-4" />
            </div>
          </div>
          {showGuestDropdown && (
            <div className="absolute z-20 right-0 mt-1 bg-white border rounded-lg shadow-lg p-4 w-80">
              {rooms.map((room, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0 last:mb-0 last:pb-0">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-medium">Room {index + 1}</div>
                    {rooms.length > 1 && (
                      <button
                        onClick={() => removeRoom(index)}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  {/* Adults */}
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="text-sm">Adults</div>
                      <div className="text-xs text-gray-500">Age 13+</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateRoom(index, 'adults', Math.max(1, room.adults - 1))}
                        className="px-2 py-1 border rounded-lg text-sm"
                        disabled={room.adults <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{room.adults}</span>
                      <button
                        onClick={() => updateRoom(index, 'adults', Math.min(4, room.adults + 1))}
                        className="px-2 py-1 border rounded-lg text-sm"
                        disabled={room.adults >= 4}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm">Children</div>
                      <div className="text-xs text-gray-500">Age 0-12</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateRoom(index, 'children', Math.max(0, room.children - 1))}
                        className="px-2 py-1 border rounded-lg text-sm"
                        disabled={room.children <= 0}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{room.children}</span>
                      <button
                        onClick={() => updateRoom(index, 'children', Math.min(2, room.children + 1))}
                        className="px-2 py-1 border rounded-lg text-sm"
                        disabled={room.children >= 2}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {rooms.length < 4 && roomTypes === "four" && (
                <button
                  onClick={addRoom}
                  className="w-full mt-2 p-2 text-blue-500 border border-blue-500 rounded-lg text-sm hover:bg-blue-50"
                >
                  Add Another Room
                </button>
              )}
            </div>
          )}
        </div>

      </div>

      {/* Trending Searches */}
      <div className="mt-4 text-sm text-gray-600 flex justify-center ">
        <span className="font-medium">Trending:</span>
        {cities.filter(city => city.trending).map((city, index, arr) => (
          <span key={city.name}>
            <button 
              className="text-blue-500 hover:text-blue-700 ml-1"
              onClick={() => handleCityClick(city)}
            >
              {city.name}
            </button>
            {index < arr.length - 1 ? ',' : ''}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HotelSearch;
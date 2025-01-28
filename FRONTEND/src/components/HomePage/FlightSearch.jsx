import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown, Plane, Calendar, Users } from "lucide-react";

const FlightSearch = () => {
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
  const [showTravellerMenu, setShowTravellerMenu] = useState(false);
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabinClass, setCabinClass] = useState("Economy");

  const cities = [
    { code: "BLR", name: "Bengaluru", airport: "Bengaluru International Airport" },
    { code: "DEL", name: "Delhi", airport: "Indira Gandhi International Airport" },
    { code: "BOM", name: "Mumbai", airport: "Chhatrapati Shivaji Maharaj International Airport" },
    { code: "MAA", name: "Chennai", airport: "Chennai International Airport" },
    { code: "HYD", name: "Hyderabad", airport: "Rajiv Gandhi International Airport" },
    { code: "CCU", name: "Kolkata", airport: "Netaji Subhas Chandra Bose International Airport" },
    { code: "COK", name: "Kochi", airport: "Cochin International Airport" },
  ];

  const handleFromCityClick = (city) => {
    if (city.code === toCity.code) {
      setToCity(fromCity);
    }
    setFromCity(city);
    setShowFromDropdown(false);
  };

  const handleToCityClick = (city) => {
    if (city.code === fromCity.code) {
      setFromCity(toCity);
    }
    setToCity(city);
    setShowToDropdown(false);
  };

   // Auto-set the departure and return dates
   useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    setDepartureDate(today);
    setReturnDate(tomorrow);
  }, []);

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    if (returnDate && date > returnDate) {
      setReturnDate(null);
    }
  };

  const getTotalTravellers = () => {
    return travellers.adults + travellers.children + travellers.infants;
  };

  const updateTravellers = (type, increment) => {
    setTravellers(prev => {
      const updated = { ...prev };
      updated[type] = Math.max(
        type === 'adults' ? 1 : 0, 
        Math.min(
          type === 'adults' ? 9 : 6,
          prev[type] + (increment ? 1 : -1)
        )
      );
      return updated;
    });
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="flex justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-2 w-full max-w-screen-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          {/* From City */}
          <div className="relative flex-1 min-w-[200px] z-40">
            <label className="block text-xs font-medium text-gray-600 mb-1">FROM</label>
            <div
              className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
              onClick={() => {
                setShowFromDropdown(!showFromDropdown);
                setShowToDropdown(false);
                setShowTravellerMenu(false);
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{fromCity.code}</div>
                  <div className="text-xs text-gray-600">{fromCity.name}</div>
                </div>
                <Plane className="text-blue-500 h-4 w-4" />
              </div>
            </div>
            {showFromDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {cities.map((city) => (
                  <div
                    key={city.code}
                    className={`p-2 cursor-pointer hover:bg-blue-50 ${
                      city.code === toCity.code ? 'opacity-50' : ''
                    }`}
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
          <div className="relative flex-1 min-w-[200px] z-40">
            <label className="block text-xs font-medium text-gray-600 mb-1">TO</label>
            <div
              className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
              onClick={() => {
                setShowToDropdown(!showToDropdown);
                setShowFromDropdown(false);
                setShowTravellerMenu(false);
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{toCity.code}</div>
                  <div className="text-xs text-gray-600">{toCity.name}</div>
                </div>
                <Plane className="text-blue-500 h-4 w-4" />
              </div>
            </div>
            {showToDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {cities.map((city) => (
                  <div
                    key={city.code}
                    className={`p-2 cursor-pointer hover:bg-blue-50 ${
                      city.code === fromCity.code ? 'opacity-50' : ''
                    }`}
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
          <div className="relative flex-1 min-w-[150px] z-30">
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
          <div className="relative flex-1 min-w-[150px] z-30">
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

          {/* Travellers & Class */}
          <div className="relative flex-1 min-w-[200px]">
            <label className="block text-xs font-medium text-gray-600 mb-1">TRAVELLERS & CLASS</label>
            <div
              className="p-2 border rounded-lg cursor-pointer hover:border-blue-500"
              onClick={() => {
                setShowTravellerMenu(!showTravellerMenu);
                setShowFromDropdown(false);
                setShowToDropdown(false);
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold">{getTotalTravellers()} Traveller(s)</div>
                  <div className="text-xs text-gray-600">{cabinClass}</div>
                </div>
                <Users className="text-blue-500 h-4 w-4" />
              </div>
            </div>
            {showTravellerMenu && (
              <div className="absolute z-20 right-0 mt-1 bg-white border rounded-lg shadow-lg p-4 w-72">
                {/* Travellers Selection */}
                <div className="space-y-3">
                  {[
                    { type: 'adults', label: 'Adults', subtitle: '12+ years' },
                    { type: 'children', label: 'Children', subtitle: '2-11 years' },
                    { type: 'infants', label: 'Infants', subtitle: '0-2 years' }
                  ].map(({ type, label, subtitle }) => (
                    <div key={type} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{label}</div>
                        <div className="text-xs text-gray-500">{subtitle}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateTravellers(type, false)}
                          className="px-2 py-1 border rounded-lg text-sm"
                          disabled={type === 'adults' ? travellers[type] <= 1 : travellers[type] <= 0}
                        >
                          -
                        </button>

                      <span className="w-4 text-center text-sm">{travellers[type]}</span>
                      <button
                        onClick={() => updateTravellers(type, true)}
                        className="px-2 py-1 border rounded-lg text-sm"
                        disabled={travellers[type] >= (type === 'adults' ? 9 : 6)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-3">
                  <div className="text-sm font-medium mb-2">Cabin Class</div>
                  <div className="grid grid-cols-2 gap-2">
                    {['Economy', 'Premium Economy', 'Business', 'First'].map((className) => (
                      <button
                        key={className}
                        onClick={() => {
                          setCabinClass(className);
                          setShowTravellerMenu(false);
                        }}
                        className={`p-1 rounded-lg text-xs ${
                          cabinClass === className
                            ? 'bg-blue-500 text-white'
                            : 'border hover:border-blue-500'
                        }`}
                      >
                        {className}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  );
};

export default FlightSearch;
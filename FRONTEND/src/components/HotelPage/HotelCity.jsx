import React from "react";
import PropTypes from "prop-types";

const HotelCity = ({ city, showDropdown, setShowDropdown, onCityClick, cities }) => {
  return (
    <div className="relative">
      <div
        className="cursor-pointer font-bold text-2xl sm:text-3xl rounded-lg mt-1 focus:ring focus:ring-blue-300"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="font-bold text-2xl sm:text-3xl">{city.name}</span>
        <span className="block text-xs sm:text-sm text-gray-700 font-normal">
          {city.address}
        </span>
      </div>
      {showDropdown && (
        <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full sm:w-[300px] max-h-60 overflow-auto shadow-lg z-10 sm:left-0 sm:right-auto">
          {cities.map((cityItem, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onCityClick(cityItem)}
            >
              <span className="font-bold">{cityItem.name}</span>
              <span className="block text-sm font-normal text-gray-500">
                {cityItem.address}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

HotelCity.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  showDropdown: PropTypes.bool.isRequired,
  setShowDropdown: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HotelCity;

import React from "react";
import PropTypes from "prop-types";

const SelectCity = ({ city, showDropdown, setShowDropdown, onCityClick, cities }) => {
  return (
    <div>
      <div
        className="cursor-pointer font-bold text-2xl rounded-lg mt-1 focus:ring focus:ring-blue-300"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="font-bold text-2xl">
          {city.name} - {city.code}
        </span>
        <span className="block text-sm text-gray-700 font-normal">{city.airport}</span>
      </div>
      {showDropdown && (
        <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full max-h-60 overflow-auto shadow-lg z-10">
          {cities.map((cityItem) => (
            <div
              key={cityItem.code}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onCityClick(cityItem)}
            >
              <span className="font-bold">
                {cityItem.name} - {cityItem.code}
              </span>
              <span className="block text-sm font-normal text-gray-500">
                {cityItem.airport}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SelectCity.propTypes = {
  city: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    airport: PropTypes.string.isRequired,
  }).isRequired,
  showDropdown: PropTypes.bool.isRequired,
  setShowDropdown: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      airport: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectCity;

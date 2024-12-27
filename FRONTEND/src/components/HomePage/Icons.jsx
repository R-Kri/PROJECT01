import React from "react";
import PropTypes from "prop-types";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LuggageIcon from "@mui/icons-material/Luggage";

// Reusable IconCard Component
const Icons = ({ IconComponent, label }) => (
  <div className="icon-card flex flex-col items-center justify-center px-4">
    <span className="icon mb-1">
      <IconComponent style={{ fontSize: 30, color: "#4A90E2" }} />
    </span>
    <p className="label text-gray-700 font-medium text-sm">{label}</p>
  </div>
);

Icons.propTypes = {
  IconComponent: PropTypes.elementType.isRequired, // Validate IconComponent as a React component
  label: PropTypes.string.isRequired, // Validate label as a required string
};

const Card = () => {
  return (
    <div className="card-container flex items-center justify-evenly mt-10 bg-blue-300 p-4 shadow-md rounded-lg">
      <Icons IconComponent={AirplanemodeActiveIcon} label="Flights" />
      <Icons IconComponent={ApartmentIcon} label="Hotels" />
      <Icons IconComponent={LuggageIcon} label="Tour Packages" />
    </div>
  );
};

export default Card;

import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LuggageIcon from "@mui/icons-material/Luggage";

const Navbar = () => (
  <div className="bg-white w-full max-w-md mx-auto mt-4 rounded-lg shadow-xl flex justify-evenly p-4">
    <span className="text-sm flex flex-col items-center">
      <AirplanemodeActiveIcon style={{ fontSize: "24px", color: "#4A90E2" }} className="mb-1" />
      Flights
    </span>
    <span className="text-sm flex flex-col items-center">
      <ApartmentIcon style={{ fontSize: "24px", color: "#4A90E2" }} className="mb-1" />
      Hotels
    </span>
    <span className="text-sm flex flex-col items-center">
      <LuggageIcon style={{ fontSize: "24px", color: "#4A90E2" }} className="mb-1" />
      Tour Packages
    </span>
  </div>
);

export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; 
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LuggageIcon from "@mui/icons-material/Luggage";

const Navbar = () => (
  <>
    <nav className="bg-white w-[90%] relative z-20 max-w-md m-auto mt-4 rounded-lg border-gray-600 shadow-2xl flex justify-between px-5 py-3">
      <Link to="/">
        <span>
          <span className="text-sm flex flex-col items-center mb-2">
            <AirplanemodeActiveIcon
              style={{ fontSize: "24px", color: "#4A90E2" }}
              className="mb-1"
            />
          </span>
          <span className="text-gray-800">Flights</span>
        </span>
      </Link>
      <Link to="/hotel">
        <span>
          <span className="text-sm flex flex-col items-center mb-2">
            <ApartmentIcon
              style={{ fontSize: "24px", color: "#4A90E2" }}
              className="mb-1"
            />
          </span>
          <span className="text-gray-800">Hotels</span>
        </span>
      </Link>
      <Link to="/tour">
        <span>
          <span className="text-sm flex flex-col items-center mb-2">
            <LuggageIcon
              style={{ fontSize: "24px", color: "#4A90E2" }}
              className="mb-1"
            />
          </span>
          <span className="text-gray-800 ">Tour Packages</span>
        </span>
      </Link>
    </nav>
  </>
);

export default Navbar;

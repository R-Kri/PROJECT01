import React from "react";
import PropTypes from "prop-types";

const Header = ({ onLoginClick }) => {
  return (
    <div>
      <div className="py-2">
        <header className="flex items-center justify-between py-1 mb-4">
          {/* Logo Section */}
          <a href="./HomePage.jsx" className="flex items-center">
            <picture>
              <img
                className="h-12"
                src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
                alt="Makemytrip Logo"
              />
            </picture>
          </a>

          {/* Navigation Menu */}
          <ul className="flex items-center gap-3 ml-auto">
            <li
              className="bg-gradient-to-r from-blue-300 to-blue-800 px-6 py-2 rounded-lg text-center font-semibold cursor-pointer"
              onClick={onLoginClick} // Trigger dialog open
            >
              <p>Login or Create Account</p>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

Header.propTypes = {
  onLoginClick: PropTypes.func.isRequired, // Ensure `onLoginClick` is a required function
};

export default Header;

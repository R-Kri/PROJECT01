import React from "react"
import PropTypes from "prop-types"

const Header = ({ onLoginClick }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-2">
        <header className="flex items-center justify-between py-1 mb-4">
          {/* Logo Section */}
          <a href="./HomePage.jsx" className="flex items-center">
            <picture>
              <img
                className="h-8 sm:h-10 md:h-12"
                src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
                alt="Makemytrip Logo"
              />
            </picture>
          </a>

          {/* Navigation Menu */}
          <ul className="flex items-center ml-auto">
            <li
              className="bg-gradient-to-r from-blue-300 to-blue-800 px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg text-center font-semibold cursor-pointer text-white text-xs sm:text-sm md:text-base"
              onClick={onLoginClick}
            >
              <p>Login/Signup</p>
            </li>
          </ul>
        </header>
      </div>
    </div>
  )
}

Header.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
}

export default Header


import React from "react";

const Header = () => {
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
          <li className="bg-blue-300 px-6 py-2 rounded-lg text-center font-semibold">
            <p>Login</p>
          </li>
          <li className="bg-blue-300 px-6 py-2 rounded-lg text-center font-semibold">
            <p>Register</p>
          </li>
          <li className="bg-blue-300 px-6 py-2 rounded-lg text-center font-semibold">
            <p>India</p>
          </li>
        </ul>
      </header>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";
import CustomUserButton from "./CustomUserButton"; 

const Header = () => {
  const { openSignIn } = useClerk();

  

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between py-2 mb-4">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img
            className="h-10"
            src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
            alt="Makemytrip Logo"
          />
        </a>

        {/* Authentication / User Section */}
        <div className="ml-auto">
          <SignedIn>
            <CustomUserButton />
          </SignedIn>
          <SignedOut>
            <button
              onClick={() => openSignIn({ redirectUrl: "/" })}
              className="bg-gradient-to-r from-blue-300 to-blue-800 px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg text-center font-semibold cursor-pointer text-white text-xs sm:text-sm md:text-base"
            >
              Login / Signup
            </button>
          </SignedOut>
        </div>
      </header>
    </div>
  );
};

export default Header;

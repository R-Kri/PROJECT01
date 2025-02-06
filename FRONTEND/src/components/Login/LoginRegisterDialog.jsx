"use client";

import { useClerk, SignedOut } from "@clerk/clerk-react";
import PropTypes from "prop-types";

const LoginRegisterDialog = ({ isOpen, onClose }) => {
  const { openSignIn } = useClerk();

  if (!isOpen) return null;

  const handleLoginClick = async () => {
    await openSignIn({ redirectUrl: "/" });
    
    onClose();
  };

  return (
    <SignedOut>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <button
          className="bg-gradient-to-r from-blue-300 to-blue-800 px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg text-center font-semibold cursor-pointer text-white text-xs sm:text-sm md:text-base"
          onClick={handleLoginClick}
        >
          Login/Signup
        </button>
      </div>
    </SignedOut>
  );
};

LoginRegisterDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginRegisterDialog;

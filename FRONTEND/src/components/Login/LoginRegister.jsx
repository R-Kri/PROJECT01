import React, { useState } from "react";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginRegister.css"

const LoginRegister = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = () => {
    const { email, password, name } = formData;

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (action === "Sign Up" && !name) {
      setError("Please enter your name.");
      return;
    }

    setError("");
    setSuccessMessage(`${action} successful!`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="container w-full max-w-md rounded-xl flex flex-col mx-auto mt-24 pb-16 bg-white shadow-lg">
      <div className="header flex flex-col items-center gap-[9px] w-full mt-[30px]">
        <div className="tabs relative flex w-64 h-12 bg-gray-100 rounded-full p-1">
          {/* Sliding background */}
          <div 
            className={`absolute top-1 transition-all duration-300 ease-in-out h-10 w-[49%] 
                       bg-blue-600 rounded-full ${action === "Login" ? "left-[50%]" : "left-1"}`}
          />
          
          {/* Buttons container */}
          <div className="relative flex w-full">
            <button
              className={`flex-1 font-bold transition-colors duration-300 rounded-full z-10
                         ${action === "Sign Up" ? "text-white" : "text-gray-700"}`}
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </button>
            <button
              className={`flex-1 font-bold transition-colors duration-300 rounded-full z-10
                         ${action === "Login" ? "text-white" : "text-gray-700"}`}
              onClick={() => setAction("Login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="inputs mt-8 flex flex-col gap-6 px-6">
        {action === "Sign Up" && (
          <div className="input flex items-center h-12 bg-gray-100 rounded-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
            <FontAwesomeIcon icon={faUser} className="mx-4 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="h-full w-full bg-transparent border-none outline-none text-gray-700 text-base"
            />
          </div>
        )}

        <div className="input flex items-center h-12 bg-gray-100 rounded-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
          <FontAwesomeIcon icon={faEnvelope} className="mx-4 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="h-full w-full bg-transparent border-none outline-none text-gray-700 text-base"
          />
        </div>

        <div className="input flex items-center h-12 bg-gray-100 rounded-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
          <FontAwesomeIcon icon={faLock} className="mx-4 text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="h-full w-full bg-transparent border-none outline-none text-gray-700 text-base"
          />
        </div>
      </div>

      {error && (
        <div className="error text-red-500 text-sm mt-4 text-center px-6">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="success text-green-500 text-sm mt-4 text-center px-6">
          {successMessage}
        </div>
      )}

      {action === "Login" && (
        <div className="text-center mt-6">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Forgot Password?
          </button>
        </div>
      )}

      <div className="submit-container flex justify-center mt-8">
        <button
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-lg 
                     hover:bg-blue-700 transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleSubmit}
        >
          {action}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
import React, { useState } from "react";
import PropTypes from "prop-types";
import { User, Mail, Lock } from "lucide-react";

const LoginRegisterDialog = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleSubmit = async(action) => {

  
    const { email, password, name } = formData;

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (action === "Sign Up" && !name && activeTab === "signup") {
      setError("Please enter your name.");
      return;
    }

    setError("");
    setSuccessMessage(`${action} successful!`);
    setTimeout(() => setSuccessMessage(""), 3000);
    //fetch API to send data to server
    const response= await fetch('http://localhost:5001/api/auth/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData)
    }
  )
  console.log(response);
   if(response.ok){
     setSuccessMessage("User created successfully");
     onClose();
   }



  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Login / Register</h2>
          <button onClick={onClose} className="text-red-500 font-bold">X</button>
        </div>
        <div className="tabs mt-4">
          <div className="flex border-b mb-4">
            <button 
              onClick={() => setActiveTab("signup")}
              className={`px-4 py-2 font-bold border-b-2 ${
                activeTab === "signup" ? "border-black" : "border-transparent"
              }`}
            >
              Sign Up
            </button>
            <button 
              onClick={() => setActiveTab("login")}
              className={`px-4 py-2 font-bold border-b-2 ${
                activeTab === "login" ? "border-black" : "border-transparent"
              }`}
            >
              Login
            </button>
          </div>
          <div>
            <form>
              {activeTab === "signup" && (
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Name</label>
                  <div className="flex items-center border rounded">
                    <User className="ml-2 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="flex-1 p-2 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              )}
              <div className="mb-4">
                <label className="block mb-2 font-medium">Email</label>
                <div className="flex items-center border rounded">
                  <Mail className="ml-2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 p-2 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Password</label>
                <div className="flex items-center border rounded">
                  <Lock className="ml-2 text-gray-500" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="flex-1 p-2 focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
              {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}
              <button
                type="button"
                onClick={() => handleSubmit(activeTab === "signup" ? "Sign Up" : "Login")}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                {activeTab === "signup" ? "Sign Up" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginRegisterDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginRegisterDialog;
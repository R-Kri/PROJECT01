import React, { useState } from "react"
import PropTypes from "prop-types"
import { User, Mail, Lock } from "lucide-react"

// Define the main component
const LoginRegisterDialog = ({ isOpen, onClose }) => {
  // State for managing active tab (signup or login)
  const [activeTab, setActiveTab] = useState("signup")

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })

  // State for error messages
  const [error, setError] = useState("")

  // State for success messages
  const [successMessage, setSuccessMessage] = useState("")

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Email validation function
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  // Password validation function
  const validatePassword = (password) => password.length >= 8

  // Reset form data
  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
    })
  }

  // Handle form submission
  const handleSubmit = async (action) => {
    const { email, password, name } = formData

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    // Validate password
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.")
      return
    }

    // Validate name for signup
    if (action === "Sign Up" && !name && activeTab === "signup") {
      setError("Please enter your name.")
      return
    }

    setError("")

    try {
      let response
      // Handle signup
      if (action === "Sign Up") {
        response = await fetch("http://localhost:5001/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      } else {
        // Handle login
        response = await fetch("http://localhost:5001/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        })
      }

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage(data.message)
        resetForm() // Reset the form data
        setTimeout(() => {
          setSuccessMessage("")
          onClose()
        }, 2000)
      } else {
        setError(data.message || "An error occurred")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("An error occurred. Please try again.")
    }
  }

  // If dialog is not open, return null
  if (!isOpen) return null

  // Render the dialog
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* Dialog header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Login / Register</h2>
          <button
            onClick={() => {
              resetForm()
              onClose()
            }}
            className="text-red-500 font-bold"
          >
            X
          </button>
        </div>
        {/* Tabs for signup and login */}
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
          {/* Form */}
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(activeTab === "signup" ? "Sign Up" : "Login")
              }}
            >
              {/* Name input (only for signup) */}
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
              {/* Email input */}
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
              {/* Password input */}
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
              {/* Error and success messages */}
              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
              {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}
              {/* Submit button */}
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
                {activeTab === "signup" ? "Sign Up" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// PropTypes for type checking
LoginRegisterDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default LoginRegisterDialog


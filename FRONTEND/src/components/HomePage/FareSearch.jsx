import React, { useState } from "react"

const FareSearch = () => {
  const [selectedFare, setSelectedFare] = useState("regular")

  const handleFare = (value) => {
    setSelectedFare(value)
  }

  const fares = [
    { value: "regular", title: "Regular", description: "Regular fares" },
    { value: "student", title: "Student", description: "Extra discounts/baggage" },
    { value: "senior", title: "Senior Citizen", description: "Up to ₹600 off" },
    { value: "forces", title: "Armed Forces", description: "Up to ₹600 off" },
    { value: "doctor", title: "Doctor & Nurses", description: "Up to ₹600 off" },
  ]

  return (
    <div className="mt-3 p-4 md:p-5 mb-5 bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="font-bold text-lg mb-2">Select a special fare</h2>
          <span className="inline-block text-white px-2 py-1 text-sm rounded bg-green-600 font-bold">
            EXTRA SAVINGS
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {fares.map((fare) => (
          <div
            key={fare.value}
            className={`${
              selectedFare === fare.value ? "bg-blue-100" : "bg-gray-50"
            } flex items-start p-2 rounded border border-gray-300 cursor-pointer transition-colors duration-200 hover:bg-blue-50`}
            onClick={() => handleFare(fare.value)}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="fare"
                value={fare.value}
                checked={selectedFare === fare.value}
                onChange={() => handleFare(fare.value)}
                className="mr-3 transform scale-100"
              />
              <div>
                <div className="font-semibold text-sm md:text-base">{fare.title}</div>
                <div className="text-xs text-gray-600">{fare.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FareSearch


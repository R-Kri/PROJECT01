import React, { useState } from "react";

const FareSearch = () => {
  const [selectedFare, setSelectedFare] = useState("regular");

  const handleFare = (value) => {
    setSelectedFare(value);
  };

  return (
    <div className="mt-3 flex items-center p-5 mb-5">
      <div>
        <div className="font-bold text-l mr-4">Select a special fare</div>
        <span className="text-white px-2 text-m rounded bg-green-600 font-bold">
          EXTRA SAVINGS
        </span>
      </div>
      <div className="ml-4 flex space-x-2 items-center">
        {/* Regular Fare */}
        <div
          className={`${
            selectedFare === "regular" ? "bg-blue-100" : ""
          } flex items-start p-1 rounded-l border border-gray-300 cursor-pointer`}
          onClick={() => handleFare("regular")}
        >
          <div className="inline-block px-2">
            <input
              type="radio"
              name="fare"
              value="regular"
              checked={selectedFare === "regular"}
              onChange={() => handleFare("regular")}
              className="transform scale-125"
            />
          </div>
          <div className="px-2">
            <div className="font-semibold text-l">Regular</div>
            <div className="text-xs">Regular fares</div>
          </div>
        </div>

        {/* Student Fare */}
        <div
          className={`${
            selectedFare === "student" ? "bg-blue-100" : ""
          } flex items-start p-1 rounded-l border border-gray-300 cursor-pointer`}
          onClick={() => handleFare("student")}
        >
          <div className="inline-block px-2">
            <input
              type="radio"
              name="fare"
              value="student"
              checked={selectedFare === "student"}
              onChange={() => handleFare("student")}
              className="transform scale-125"
            />
          </div>
          <div className="px-2">
            <div className="font-semibold text-l">Student</div>
            <div className="text-xs">Extra discounts/baggage</div>
          </div>
        </div>

        {/* Senior Fare */}
        <div
          className={`${
            selectedFare === "senior" ? "bg-blue-100" : ""
          } flex items-start p-1 rounded-l border border-gray-300`}
          onClick={() => handleFare("senior")}
        >
          <div className="inline-block px-2">
            <input
              type="radio"
              name="fare"
              value="senior"
              checked={selectedFare === "senior"}
              onChange={() => handleFare("senior")}
              className="transform scale-125"
            />
          </div>
          <div className="px-2">
            <div className="font-semibold text-l">Senior Citizen</div>
            <div className="text-xs">Up to ₹600 off</div>
          </div>
        </div>

        {/* Armed Forces Fare */}
        <div
          className={`${
            selectedFare === "forces" ? "bg-blue-100" : ""
          } flex items-start p-1 rounded-l border border-gray-300`}
          onClick={() => handleFare("forces")}
        >
          <div className="inline-block px-2">
            <input
              type="radio"
              name="fare"
              value="forces"
              checked={selectedFare === "forces"}
              onChange={() => handleFare("forces")}
              className="transform scale-125"
            />
          </div>
          <div className="px-2">
            <div className="font-semibold text-l">Armed Forces</div>
            <div className="text-xs">Up to ₹600 off</div>
          </div>
        </div>

        {/* Doctor & Nurses Fare */}
        <div
          className={`${
            selectedFare === "doctor" ? "bg-blue-100" : ""
          } flex items-start p-1 rounded-l border border-gray-300`}
          onClick={() => handleFare("doctor")}
        >
          <div className="inline-block px-2">
            <input
              type="radio"
              name="fare"
              value="doctor"
              checked={selectedFare === "doctor"}
              onChange={() => handleFare("doctor")}
              className="transform scale-125"
            />
          </div>
          <div className="px-2">
            <div className="font-semibold text-l">Doctor & Nurses</div>
            <div className="text-xs">Up to ₹600 off</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareSearch;

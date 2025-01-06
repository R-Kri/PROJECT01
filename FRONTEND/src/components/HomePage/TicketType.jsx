import React, { useState } from "react";

const TicketType = () => {
  const [selectedTicket, setSelectedTicket] = useState("one-way");

  const handleSelection = (value) => {
    setSelectedTicket(value);
  };

  return (
    <ul className="flex mt-10 space-x-4 bg-white p-4 rounded-lg items-center">
      <li
        className={`${
          selectedTicket === "one-way" ? "bg-blue-300 rounded-xl pr-2 font-semibold" : ""
        } cursor-pointer`}
        onClick={() => handleSelection("one-way")}
      >
        <span className="inline-block px-2">
          <input
            type="radio"
            checked={selectedTicket === "one-way"}
            onChange={() => handleSelection("one-way")}
            className="bg-cyan-100 font-bold pxx-2 rounded-md"
          />
        </span>
        One Way
      </li>
      <li
        className={`${
          selectedTicket === "round-trip" ? "bg-blue-300 rounded-xl pr-2 font-semibold" : ""
        } cursor-pointer`}
        onClick={() => handleSelection("round-trip")}
      >
        <span className="inline-block px-2">
          <input
            type="radio"
            checked={selectedTicket === "round-trip"}
            onChange={() => handleSelection("round-trip")}
            className="bg-cyan-100 font-bold px-2 rounded-md"
          />
        </span>
        Round Trip
      </li>
      <li
        className={`${
          selectedTicket === "multi-city" ? "bg-blue-300 rounded-xl pr-2 font-semibold" : ""
        } cursor-pointer`}
        onClick={() => handleSelection("multi-city")}
      >
        <span className="inline-block px-2">
          <input
            type="radio"
            checked={selectedTicket === "multi-city"}
            onChange={() => handleSelection("multi-city")}
            className="bg-cyan-100 font-bold px-2 rounded-md"
          />
        </span>
        Multi City
      </li>
    </ul>
  );
};

export default TicketType;

import React from "react";
import PropTypes from "prop-types";
import { flights } from "../data/flights";
import { useState } from "react";
import { FlightCard } from "./FlightCards";

export function SearchResults({ isVisible }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleSelectedCard = (index) => {
    setSelectedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!isVisible) return null;

  return (
    <div className="mt-4 space-y-4 w-[70%] flex align-center justify-center flex-col mx-auto">
      {flights.map((flight) => (
        <FlightCard
          key={flight.id}
          isSelected={selectedCardIndex === flight.id}
          onSelect={() => handleSelectedCard(flight.id)}
          flight={flight}
        />
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

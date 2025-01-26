import React from "react";
import PropTypes from "prop-types";
import { flights } from "../data/flights";  // Ensure this path is correct
import { FlightCard } from "./FlightCards";

export function SearchResults({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="mt-4 space-y-4 w-[70%] flex align-center justify-center flex-col mx-auto">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

// Prop validation
SearchResults.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

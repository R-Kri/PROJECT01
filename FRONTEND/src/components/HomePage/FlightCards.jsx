import React from "react";
import PropTypes from "prop-types";
import { Clock } from "lucide-react";
import img1 from "../../assets/logos/indigo-vector-logo-2022.png";
import img2 from "../../assets/logos/Vistara-logo.svg";
import img3 from "../../assets/logos/spicejet.png";

// Mapping of airline names to their logo URLs
const airlineLogos = {
  IndiGo:img1,
  Vistara: img2,
  SpiceJet: img3,
  // Add more airline logos here
};

export function FlightCard({ flight }) {
  console.log(flight.airline);
  console.log(airlineLogos[flight.airline]);
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="cover p-1">
            <img
              src={
                airlineLogos[flight.airline] || "../../assets/logos/indigo-vector-logo-2022.png"
              }
              alt={flight.airline}
              className="cover rounded-full h-8 w-8 object-contain"
            />
          </div>
          <span className="font-medium">{flight.airline}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{flight.onTimePerformance}% on time</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{flight.departureTime}</span>
          <span className="text-sm text-muted-foreground">{flight.origin}</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground">{flight.duration}</span>
          <div className="my-1 h-[2px] w-24 bg-gray-300" />
          <span className="text-xs text-muted-foreground">{flight.stops}</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold">{flight.arrivalTime}</span>
          <span className="text-sm text-muted-foreground">{flight.destination}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold">₹{flight.price.toLocaleString()}</span>
        <span className="text-sm text-muted-foreground">per adult</span>
      </div>
    </div>
  );
}

// Prop validation
FlightCard.propTypes = {
  flight: PropTypes.shape({
    airline: PropTypes.string.isRequired,
    onTimePerformance: PropTypes.number.isRequired,
    departureTime: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    stops: PropTypes.string.isRequired,
    arrivalTime: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

import { hotels } from "../data/hotels"
import { HotelCard } from "./HotelCard"
import PropTypes from "prop-types"

const HotelSearchResults = ({ isVisible }) => {
  if (!isVisible) return null
  return (
    <div className="mt-4 space-y-4">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
}

HotelSearchResults.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}

export default HotelSearchResults;
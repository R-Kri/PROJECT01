import { hotels } from "../data/hotels"
import  HotelCard  from "./HotelCard"
import PropTypes from "prop-types"
import { useState } from "react"

const HotelSearchResults = ({ isVisible}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  
  const handleIndexCard =(index)=> {
    setSelectedCardIndex((prevIndex)=>(prevIndex===index?null:index));
  };

  if (!isVisible) return null
  return (
    <div className="mt-4 space-y-4 ">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id}
        isSelected={selectedCardIndex===hotel.id}
        onSelect={()=>handleIndexCard(hotel.id)}
        hotel={hotel} />
      ))}
    </div>
  )
}

HotelSearchResults.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}

export default HotelSearchResults;
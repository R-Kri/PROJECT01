import React from 'react'
import TicketType from './TicketType'
import FlightSearch from './FlightSearch'
import FareSearch from './FareSearch'

const Container = () => {
  return (
    <div className='w-[90%] bg-white flex align-center relative justify-center flex-col rounded-xl'>
        <TicketType />
        <FlightSearch />
        <FareSearch />
    </div>
  )
}

export default Container
import React from 'react'
import HotelSearch from './HotelSearch'

const HotelContainer = () => {
  return (
    <div className='w-[100%] -mb-10 -mt-9 bg-white flex align-center relative justify-center flex-col rounded-xl'>
        <div className="mt-10 flex space-x-4 bg-white p-4 rounded-lg ">
            <span>
            <input type="radio" defaultChecked className='bg-cyan-100 font-bold p-2 rounded-md'/> upto 4 rooms
            </span>
            <span>
            <input type="radio" /> Group Deals
            </span>
        </div>
        <HotelSearch />
        <div className='flex justify-center items-center mt-1 pb-4 mb-5'>
            <p>Trending Searches: Mumbai, India</p>
        </div>
    </div>
  )
}

export default HotelContainer
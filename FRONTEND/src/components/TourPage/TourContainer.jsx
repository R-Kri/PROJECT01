import React from 'react'
import TourSearch from './TourSearch'
import TourOffer from './TourOffer'
import RecentSearch from './RecentSearch'

const TourContainer = () => {
  return (
    <div className='w-[100%] -mb-10 -mt-8 bg-white flex align-center relative justify-center flex-col rounded-xl'>
        <TourOffer />
        <TourSearch/>
        <RecentSearch />
    </div>
  )
}

export default TourContainer
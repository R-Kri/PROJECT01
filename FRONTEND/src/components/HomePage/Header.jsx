import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center '>
            <img className="h-12 mb-4" src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" alt="Makemytrip Logo" />
            <div className='bg-blue-300 px-4 py-1 rounded-lg -mt-5 font-semibold'>Log in </div>
        </div>
    </div>
  )
}

export default Header
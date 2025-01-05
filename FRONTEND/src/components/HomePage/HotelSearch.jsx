import React from 'react';

const HotelSearch = () => (
  <div className="rounded-lg mt-4 m-5 flex space-x-4 border-solid border-2 border-gray-300">
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700">City, Property Name Or Location</span>
      <h1 className="font-bold text-3xl">Goa</h1>
      <span className="text-sm text-gray-700">India</span>
    </div>
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700">Check-In</span>
      <h1 className="font-bold text-3xl">Bengaluru</h1>
      <span className="text-sm text-gray-700">BLR, Bengaluru International Airport India</span>
    </div>
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700">Check-Out</span>
      <div className="flex items-center space-x-1 mb-0 px-0" >
        <h1 className="font-bold text-3xl">26</h1>
        <h3 className="text-gray-900 text-xl px-3">Dec 24</h3>
      </div>
      <span className="text-sm text-gray-600">Thursday</span>
    </div>
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700 text-lg">Return</span>
      <h1 className="text-gray-600 text-sm">Tap to add a return date for bigger discounts</h1>
    </div>
    <div className="w-1/5 px-4 py-2">
      <span className="text-gray-700">Travellers & Class</span>
      <h1 className="font-bold text-3xl">1 Traveller</h1>
      <span className="text-sm text-gray-600">Economy/Premium Economy</span>
    </div>
  </div>
);

export default HotelSearch;

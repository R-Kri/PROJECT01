import React from 'react';

const TourSearch = () => (
  <div className="rounded-lg mt-4 m-5 flex space-x-4 border-solid border-2 border-gray-300">
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700">From City</span>
      <h1 className="font-bold text-3xl">New Delhi</h1>
      <span className="text-sm text-gray-700">India</span>
    </div>
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700">To City/Country/Category</span>
      <h1 className="font-bold text-3xl">Bengaluru</h1>
      <span className="text-sm text-gray-700">India</span>
    </div>
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700">Departure Date</span>
      <div className="flex items-center space-x-1 mb-0 px-0" >
        <h3 className="text-gray-900 text-xl px-3">Select Date</h3>
      </div>
      <span className="text-sm text-gray-600">Thursday</span>
    </div>
    <div className="w-1/5 px-4 py-2 border-solid border-r-2 border-gray-300">
      <span className="text-gray-700 text-lg">Rooms & Guests</span>
      <h1 className="text-gray-600 text-sm">Select Rooms</h1>
    </div>
    <div className="w-1/5 px-4 py-2">
      <span className="text-gray-700">Filters</span>
      <h1 className="font-bold text-xl">Special Filters (Optional)</h1>
    </div>
  </div>
);

export default TourSearch;

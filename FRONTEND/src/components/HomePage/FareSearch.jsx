import React from 'react';

const FareSearch = () => (
  <div className="mt-6 flex items-center p-5">
    <div>
        <div className="font-bold text-2xl mr-4">Select a special fare</div>
        <span className="text-green-600 text-lg font-semibold">EXTRA SAVINGS</span>
    </div>
    <div className="ml-4 flex space-x-2 items-center">
      <span><input type="radio" defaultChecked /> Regular</span>
      <span><input type="radio" /> Student</span>
      <span><input type="radio" /> Senior Citizen</span>
      <span><input type="radio" /> Armed Forces</span>
      <span><input type="radio" /> Doctor and Nurses</span>
    </div>
  </div>
);

export default FareSearch;

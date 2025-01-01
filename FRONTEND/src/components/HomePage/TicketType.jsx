import React from 'react';

const TicketType = () => (
  <div className="mt-10 flex space-x-4 bg-white p-4 rounded-lg ">
    <span>
      <input type="radio" defaultChecked className='bg-cyan-100 font-bold p-2 rounded-md'/> One Way
    </span>
    <span>
      <input type="radio" /> Round Trip
    </span>
    <span>
      <input type="radio" /> Multi City
    </span>
  </div>
);

export default TicketType;

import React from "react";
// import HotelSearch from "./HotelSearch";

const HotelContainer = () => {
  // const [roomTypes, setroomTypes] = useState("four");
  // const handleRooms = (value) => {
  //   setroomTypes(value);
  // };

  return (
    <div className="w-[100%] -mb-10 -mt-9 bg-white flex align-center relative justify-center flex-col rounded-xl">
      <ul className="flex mt-10 p-4 gap-4 items-center">
        <li className="flex items-center">
          <input type="radio" name="rooms" id="rooms" className="mr-1" />
          <label htmlFor="rooms" className="px-2">
            Upto 4 Rooms
          </label>
        </li>
        <li className="flex items-center">
          <input type="radio" name="rooms" id="deals" className="mr-1" />
          <label htmlFor="deals" className="px-2">
            Group Deals
          </label>
        </li>
      </ul>
      <div className="flex justify-center items-center mt-1 pb-4 mb-5">
        <p>Trending Searches: Mumbai, India</p>
      </div>
    </div>
  );
};

export default HotelContainer;

import React, { useState } from 'react';
import Header from '../HomePage/Header';
import Navbar from '../HomePage/Navbar';
import HotelContainer from './HotelContainer';
import SearchButton from '../HomePage/SearchButton';
import HotelSearch from './HotelContainer';
import HotelSearchResults from './SearchResults';

function HotelPage() {
  const [click, setClick] = useState(false);
  const handleHotelSearch = () => { 
    console.log("Hotel Search Button Clicked");
    setClick(!click);
  }
  return (
    <>
    <div className="h-[80%] w-[100%] bg-cover bg-center" style={{ backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')` }}>
      <div className="container mx-auto py-3 px-5">
        <Header/>
        <Navbar />
        <HotelContainer />
        <SearchButton onClick={handleHotelSearch}/>
      </div>
    </div>
    <div className='container mx-auto py-3 px-5 w-[80%]'>
    <HotelSearchResults isVisible={click}/>
  </div>
  </>
  );
}

export default HotelPage;
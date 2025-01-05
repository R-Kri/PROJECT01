import React from 'react';
import SearchButton from './SearchButton';
import Navbar from './Navbar';
import Header from './Header';
import HotelContainer from './HotelContainer';

function HotelPage() {
  return (
    <div className="h-[80%] w-[100%] bg-cover bg-center" style={{ backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')` }}>
      <div className="container mx-auto py-3 px-5">
        <Header />
        <Navbar />
        <HotelContainer />
        <SearchButton />
      </div>
    </div>
  );
}

export default HotelPage;

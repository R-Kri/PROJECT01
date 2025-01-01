import React from 'react';
import SearchButton from './SearchButton';
import Container from './Container';
import Card from './Navbar';

function HomePage() {
  return (
    <div className="h-[80%] w-[100%] bg-cover bg-center" style={{ backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')` }}>
      <div className="container mx-auto py-10">
        <img className="h-12 mb-4" src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" alt="Makemytrip Logo" />
        <Card />
        <Container />
        <SearchButton />
      </div>
    </div>
  );
}

export default HomePage;

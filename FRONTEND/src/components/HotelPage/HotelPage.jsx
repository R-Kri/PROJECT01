import React, { useState } from 'react';
import Header from '../HomePage/Header';
import Navbar from '../HomePage/Navbar';
import HotelContainer from './HotelContainer';
import SearchButton from '../HomePage/SearchButton';
import HotelSearch from './HotelContainer';
import HotelSearchResults from './SearchResults';
import LoginRegisterDialog from '../Login/LoginRegisterDialog';

function HotelPage() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
    // Handlers to open and close the dialog
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);
    const [showResults, setShowResults] = useState(false);

  const [click, setClick] = useState(false);
  const handleHotelSearch = () => { 
    console.log("Hotel Search Button Clicked");
    setClick(!click);
  }
  return (
    <>
    <div className="h-[80%] w-[100%] bg-cover bg-center" style={{ backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')` }}>
      <div className="container mx-auto py-3 px-5">
        <Header onLoginClick={openDialog} />
        <Navbar />
        <HotelContainer />
        <SearchButton onClick={handleHotelSearch}/>
        <LoginRegisterDialog isOpen={isDialogOpen} onClose={closeDialog} />
      </div>
    </div>
    <div className='container mx-auto py-3 px-5 w-[80%]'>
    <HotelSearchResults isVisible={click}/>
  </div>
  </>
  );
}

export default HotelPage;
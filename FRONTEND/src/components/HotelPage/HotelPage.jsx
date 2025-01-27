import React, { useState } from 'react';
import Header from '../HomePage/Header';
import Navbar from '../HomePage/Navbar';
import HotelContainer from './HotelContainer';
import SearchButton from '../HomePage/SearchButton';
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
            <div className="h-[80vh] w-full bg-cover bg-center" 
                 style={{ backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')` }}>
                <div className="container mx-auto py-3 px-5">
                    <Header onLoginClick={openDialog} />
                    <Navbar />
                    <HotelContainer />
                    <div className="-mt-7">
                        <SearchButton onClick={handleHotelSearch} />
                    </div>
                    <LoginRegisterDialog isOpen={isDialogOpen} onClose={closeDialog} />
                </div>
            </div>
            <div className='container mx-auto py-3 px-5 w-full sm:w-4/5 md:w-3/4 lg:w-2/3'>
                <HotelSearchResults isVisible={click}/>
            </div>
        </>
    );
}

export default HotelPage;

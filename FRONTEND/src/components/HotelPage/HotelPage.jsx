import React, { useState } from 'react';
import Header from '../HomePage/Header';
import Navbar from '../HomePage/Navbar';
import HotelContainer from './HotelContainer';
import SearchButton from '../HomePage/SearchButton';
import HotelSearchResults from './SearchResults';
import LoginRegisterDialog from '../Login/LoginRegisterDialog';

function HotelPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // Handlers to open and close the dialog
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const handleHotelSearch = () => {
        console.log("Hotel Search Button Clicked");
        setShowResults(prevState => !prevState); // Toggle showResults state
    };

    return (
        <>
            <div className="container mx-auto py-3 px-5">
                <Header onLoginClick={openDialog} />
                <Navbar />
                <HotelContainer />
                <div className="-mt-7">
                    <SearchButton onClick={handleHotelSearch} />
                </div>
                <LoginRegisterDialog isOpen={isDialogOpen} onClose={closeDialog} />
            </div>

            {/* Only show HotelSearchResults if showResults is true */}
            {showResults && (
                <div className="container mx-auto py-3 px-5 w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
                    <HotelSearchResults isVisible={showResults} />
                </div>
            )}
        </>
    );
}

export default HotelPage;

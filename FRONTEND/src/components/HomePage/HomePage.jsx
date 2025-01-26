import React, { useState } from 'react';
import SearchButton from './SearchButton';
import Container from './Container';
import Navbar from './Navbar';
import Header from './Header';
import LoginRegisterDialog from '../Login/LoginRegisterDialog';
import { SearchResults } from "./SearchResults";

function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handlers to open and close the dialog
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const [showResults, setShowResults] = useState(false);

  const toggleResults = () => setShowResults(!showResults)

  return (
    <div>
    <div
      className="h-[80%] w-[100%] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')`,
      }}
    >
      <div className="container mx-auto py-3 px-5">
        {/* Pass openDialog to Header */}
        <Header onLoginClick={openDialog} />
        <Navbar />
        <Container />
        <div className="mx-auto max-w-4xl">
          <SearchButton onClick={toggleResults} />
        </div>
        {/* Render Login/Register Dialog */}
        <LoginRegisterDialog isOpen={isDialogOpen} onClose={closeDialog} />
      </div>
      </div>
      <div>
      <SearchResults isVisible={showResults} />
    </div>
    </div>
  );
}

export default HomePage;

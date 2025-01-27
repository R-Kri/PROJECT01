import React, { useState } from 'react';
import SearchButton from './SearchButton';
import Container from './Container';
import Navbar from './Navbar';
import Header from './Header';
import LoginRegisterDialog from '../Login/LoginRegisterDialog';
import { SearchResults } from "./SearchResults";

function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const [showResults, setShowResults] = useState(false);

  const toggleResults = () => setShowResults(!showResults);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-grow bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')`,
        }}
      >
        <div className="container mx-auto py-3 px-5 flex flex-col flex-grow">
          {/* Pass openDialog to Header */}
          <Header onLoginClick={openDialog} className="flex-shrink-0" />
          <Navbar className="flex-shrink-0" />
          <Container className="flex-grow" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex-shrink-0">
            <SearchButton onClick={toggleResults} />
          </div>
          {/* Render Login/Register Dialog */}
          <LoginRegisterDialog isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
      </div>
      <div className="mt-4 flex-shrink-0">
        <SearchResults isVisible={showResults} />
      </div>
    </div>
  );
}

export default HomePage;

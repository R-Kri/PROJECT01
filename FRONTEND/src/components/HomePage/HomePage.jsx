import React, { useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import Container from './Container';
import Navbar from './Navbar';
import Header from './Header';
import LoginRegisterDialog from '../Login/LoginRegisterDialog';
import { SearchResults } from "./SearchResults";
import axios from 'axios';
import Footer from './Footer';

const HomePage = ()=> {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [flightData, setFlightData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Name,setName]=useState('');

  const fetchFlightData = async () => {
    setIsLoading(true);
    setError(null);

    setIsLoading(false);
  };

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const [showResults, setShowResults] = useState(false);

  const toggleResults = () => {
    setShowResults(!showResults);
    if (!flightData && !isLoading) {
      fetchFlightData();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-homepage">
        <div className="container mx-auto py-3 px-5 flex flex-col flex-grow">
          <Header onLoginClick={openDialog} username={Name} className="flex-shrink-0" />
          <Navbar className="flex-shrink-0" />
          <Container className="flex-grow" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex-shrink-0">
            <SearchButton onClick={toggleResults} />
          </div>
          <LoginRegisterDialog setName={setName} isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
      </div>
      <div className="mt-4 mb-8 flex-shrink-0">
        <SearchResults 
          isVisible={showResults} 
          flightData={flightData} 
          isLoading={isLoading} 
          error={error}
        />
      </div>
      <Footer />
    </div>
  );
  
}

export default HomePage
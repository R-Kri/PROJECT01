import React, { useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import Container from './Container';
import Navbar from './Navbar';
import Header from './Header';
import LoginRegisterDialog from '../Login/LoginRegisterDialog';
import { SearchResults } from "./SearchResults";
import axios from 'axios';
// import { get } from 'mongoose';

function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [flightData, setFlightData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [Name,setName]=useState('');
  // const getUserDetails = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5001/api/users/me", {
  //       withCredentials: true
  //     });
  //     console.log("Token verification:", response.data);
  //   } catch (error) {
  //     console.error("Token verification failed:", error.response?.data);
  //   }
  // };

  const data = {
    Auth_Header: {
      UserId: "XXXXXXXXXXXX",
      Password: "XXXXXXXXXXXX",
      IP_Address: "XXXXXXXXXXXX",
      Request_Id: "5500887959052",
      IMEI_Number: "2232323232323"
    },
    Travel_Type: 0,
    Booking_Type: 0,
    TripInfo: [
      {
        Origin: "BOM",
        Destination: "MAA",
        TravelDate: "01/25/2022",
        Trip_Id: 0
      }
    ],
    Adult_Count: "1",
    Child_Count: "0",
    Infant_Count: "0",
    Class_Of_Travel: "0",
    InventoryType: 0,
    Source_Type: 0,
    SrCitizen_Search: false,
    StudentFare_Search: false,
    DefenceFare_Search: false,
    Filtered_Airline: [
      {
        Airline_Code: ""
      }
    ]
  };
  // useEffect(() => {
  //   getUserDetails(); 
  // }, []);

  const fetchFlightData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://api.travelogy.online/Flight/AirAPIService.svc/JSONService/Air_Search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'private',
          'Transfer-Encoding': 'chunked',
          'X-AspNet-Version': '4.0.30319',
          'X-Powered-By': 'ASP.NET'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setFlightData(responseData);
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to fetch flight data');
    } finally {
      setIsLoading(false);
    }
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const response = await fetch("http://localhost:5001/api/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response);
      if (response.ok) {
        const data = await response.json()
        setUsername(data.username)
      }
    } catch (error) {
      console.log("Error fetching user data:", error)
    }
  }



  useEffect(() => {
    getUser();
  }, []);

  // used effect to fetch user data when username changes
  useEffect(() => {
    getUser()
  }, [username])

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
      <div
        className="flex-grow bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')`,
        }}
      >
        <div className="container mx-auto py-3 px-5 flex flex-col flex-grow">
          <Header onLoginClick={openDialog} username={Name}  className="flex-shrink-0" />
          <Navbar className="flex-shrink-0" />
          <Container className="flex-grow" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex-shrink-0">
            <SearchButton onClick={toggleResults} />
          </div>
          <LoginRegisterDialog setName={setName} isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
      </div>
      <div className="mt-4 flex-shrink-0">
        <SearchResults 
          isVisible={showResults} 
          flightData={flightData} 
          isLoading={isLoading} 
          error={error}
        />
      </div>
    </div>
  );
}

export default HomePage;
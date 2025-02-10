import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../HomePage/Header";
import Navbar from "../HomePage/Navbar";
import TourContainer from "./TourContainer";
import SearchButton from "../HomePage/SearchButton";
import TourCard from "./TourCard";
import { tours } from "../data/tours";
import LoginRegisterDialog from "../Login/LoginRegisterDialog";
import Footer from "../HomePage/Footer";
// import { set } from "react-datepicker/dist/date_utils";

function TourPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleSelectedCard = (index) => {
    setSelectedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSearch = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowResults(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <div className="relative container mx-auto py-3 px-5">
        <Header onLoginClick={openDialog} />
        <Navbar />
        <TourContainer />
        <SearchButton onClick={handleSearch} loading={loading} />
        <LoginRegisterDialog isOpen={isDialogOpen} onClose={closeDialog} />
      </div>

      {showResults && (
        <div className="container mx-auto py-8 px-5">
          <h2 className="text-2xl font-semibold mb-6">Available Tour Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour, index) => (
              <TourCard key={index} 
              isSelected={selectedCardIndex===index}
              onSelect={()=>handleSelectedCard(index)}
              {...tour}
              />
            ))}
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

TourPage.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
      discount: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
      }).isRequired,
      extraDiscount: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
      }).isRequired,
      isDealOfTheDay: PropTypes.bool,
    })
  ),
};

TourPage.defaultProps = {
  tours: [],
};

export default TourPage;

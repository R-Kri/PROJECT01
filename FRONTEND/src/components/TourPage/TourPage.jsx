"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../HomePage/Header";
import Navbar from "../HomePage/Navbar";
import TourContainer from "./TourContainer";
import SearchButton from "../HomePage/SearchButton";
import TourCard from "./TourCard";
import { tours } from "../data/tours"

function TourPage() {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowResults(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[60vh] w-full bg-cover bg-center before:absolute before:inset-0 before:bg-black/40"
        style={{
          backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Bali_1_l_658_1200.jpg')`,
        }}
      >
        <div className="relative container mx-auto py-3 px-5">
          <Header />
          <Navbar />
          <TourContainer />
          <SearchButton onClick={handleSearch} loading={loading} />
        </div>
      </div>

      {showResults && (
        <div className="container mx-auto py-8 px-5">
          <h2 className="text-2xl font-semibold mb-6">Available Tour Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
        </div>
      )}
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

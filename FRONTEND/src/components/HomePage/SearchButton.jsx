import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

const SearchButton = ({ onClick }) => (
  <div 
    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-center py-2 rounded-full mt-4 w-48 mx-auto cursor-pointer relative z-20 text-2xl flex items-center justify-center gap-2"
    onClick={onClick}
  >
    <Search className="h-5 w-5" />
    <span>Search</span>
  </div>
);

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;

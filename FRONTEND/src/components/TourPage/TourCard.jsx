import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TourCard = ({
  title,
  duration,
  location,
  image,
  amenities,
  price,
  totalPrice,
  discount,
  extraDiscount,
  isDealOfTheDay,
  onSelect,
  isSelected
}) => {

  return (
    <div  onClick={onSelect} className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 ${isSelected? "transition scale-95 border border-2xl border-blue-700":""} `}>
      {/* Image Section */}
      <div className="relative h-48">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isDealOfTheDay && (
          <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Deal of the day
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 text-black px-2 py-1 rounded text-sm font-medium">
          {duration}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Title and Location */}
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>

          {/* Amenities List */}
          <div className="grid grid-cols-2 gap-4">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-600 text-white flex items-center justify-center rounded-full text-xs">
                  ✓
                </span>
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>

          {/* Pricing and Discounts */}
          <div className="pt-4 border-t">
            <div className="flex items-start justify-between">
              <div>
                {discount && discount.amount && (
                  <p className="text-sm text-gray-500">
                    Includes extra ₹{discount.amount} discount for packages with flights
                  </p>
                )}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">₹{price.toLocaleString()}</div>
                <div className="text-sm text-gray-500">/Person</div>
                <div className="text-sm text-gray-500">
                  Total Price ₹{totalPrice.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Extra Discount */}
          {extraDiscount && extraDiscount.amount && (
            <div className="flex items-center gap-2 pt-2">
              <span className="w-4 h-4 bg-blue-600 text-white flex items-center justify-center rounded-full text-xs">
                💡
              </span>
              <span className="text-sm">
                Extra ₹{extraDiscount.amount} off. Use Code{' '}
                <span className="font-semibold">{extraDiscount.code}</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  discount: PropTypes.shape({
    amount: PropTypes.number,
    code: PropTypes.string,
  }),
  extraDiscount: PropTypes.shape({
    amount: PropTypes.number,
    code: PropTypes.string,
  }),
  isDealOfTheDay: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

TourCard.defaultProps = {
  discount: null,
  extraDiscount: null,
  isDealOfTheDay: false,
};

export default TourCard;

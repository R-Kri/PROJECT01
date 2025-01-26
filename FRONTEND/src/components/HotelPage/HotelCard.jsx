import React from "react";
import PropTypes from "prop-types";
import { Star, PocketIcon as Pool } from "lucide-react";

export function HotelCard({ hotel }) {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="flex gap-4 p-4">
        <div className="relative h-48 w-64 flex-shrink-0">
          <img
            src={hotel.images[0] || "/placeholder.svg"}
            alt={hotel.name}
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute bottom-2 left-2 flex gap-1">
            {hotel.images.slice(0, 3).map((_, index) => (
              <div
                key={index}
                className="h-12 w-12 rounded border-2 border-white bg-black/20"
              />
            ))}
            <button className="rounded border-2 border-white bg-black/40 px-2 text-xs text-white">
              View All
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                {hotel.name} - Near {hotel.location} Beach
              </h3>
              <div className="mt-1 flex items-center gap-1">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center rounded bg-blue-600 px-2 py-1 text-sm text-white">
                <span className="font-semibold">{hotel.rating}</span>
                <span className="ml-1">Very Good</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                ({hotel.totalRatings} Ratings)
              </div>
            </div>
          </div>

          <div className="mt-2">
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm">
              {hotel.location}
            </span>
            <span className="ml-2 text-sm text-muted-foreground">
              {hotel.walkingDistance}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-4">
            {hotel.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
            <div className="flex items-center gap-1 text-sm">
              <Pool className="h-4 w-4" />
              <span>Swimming Pool</span>
            </div>
          </div>

          <div className="mt-auto flex items-end justify-between">
            <div className="text-sm text-green-600">{hotel.description}</div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground line-through">
                ₹{hotel.originalPrice}
              </div>
              <div className="text-2xl font-bold">₹{hotel.price}</div>
              <div className="text-sm text-muted-foreground">
                + ₹ {hotel.taxesAndFees} taxes & fees
              </div>
              <div className="text-xs text-muted-foreground">Per Night</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    walkingDistance: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    taxesAndFees: PropTypes.number.isRequired,
  }).isRequired,
};

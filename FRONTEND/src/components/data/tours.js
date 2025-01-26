import beachImage from "../../assets/images/beach.jpg";
import holidayImage from "../../assets/images/holiday.jpg";

export const tours = [
    {
      title: "Your Dream Goa Getaway - Best Price",
      duration: "3N/4D",
      location: "3N Goa",
      image:beachImage,
      amenities: ["Round Trip Flights", "Airport Transfers", "4 Star Hotel", "Selected Meals"],
      price: 20910,
      totalPrice: 41820,
      discount: {
        amount: 1546,
        code: "SUNDAYSAVER",
      },
      extraDiscount: {
        amount: 1899,
        code: "SUNDAYSAVER",
      },
      isDealOfTheDay: true,
    },
    {
      title: "Goa Blissful Escapade",
      duration: "5N/6D",
      location: "5N Goa",
      image:holidayImage,
      amenities: ["Round Trip Flights", "Airport Transfers", "4 Star Hotel", "Selected Meals"],
      price: 21641,
      totalPrice: 43282,
      discount: {
        amount: 1601,
        code: "SUNDAYSAVER",
      },
      extraDiscount: {
        amount: 1965,
        code: "SUNDAYSAVER",
      },
    },
  ];
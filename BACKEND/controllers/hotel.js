import Hotel from '../models/hotelModel.js';

export const createHotel = async (req, res,next) => {
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err);
    }
};

export const updateHotel = async (req, res,next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
        res.status(200).json(updatedHotel);    
    }catch(err){
        next(err)
    }
};

export const deleteHotel = async (req, res,next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");    
    }catch(err){
        next(err)
    }
};

export const getHotel = async (req, res,next) => {
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);    
    }catch(err){
        next(err)
    }
};

export const getAllHotels = async (req, res,next) => {
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);    
    }catch(err){
        next(err)
    }
};

export const countByCity = async (req, res, next) => {
    try {
        // Validate if 'cities' query parameter exists
        if (!req.query.cities) {
            return res.status(400).json({ 
                message: "The 'cities' query parameter is required." 
            });
        }

        // Split the 'cities' query parameter into an array
        const cities = req.query.cities.split(",");

        // Use Promise.all to handle multiple database queries simultaneously
        const list = await Promise.all(
            cities.map((city) => Hotel.countDocuments({ city }))
        );

        // Return the result as a JSON response
        res.status(200).json(list);

    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};

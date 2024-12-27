import TourPackage from "../models/tourPackageModel.js"; // Adjust the path as per your project structure

// Create a new tour package
export const createTourPackage = async (req, res, next) => {
    const newTourPackage = new TourPackage(req.body);

    try {
        const savedTourPackage = await newTourPackage.save();
        res.status(200).json(savedTourPackage);
    } catch (err) {
        next(err);
    }
};

// Update an existing tour package
export const updateTourPackage = async (req, res, next) => {
    try {
        const updatedTourPackage = await TourPackage.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedTourPackage);
    } catch (err) {
        next(err);
    }
};

// Delete a tour package
export const deleteTourPackage = async (req, res, next) => {
    try {
        await TourPackage.findByIdAndDelete(req.params.id);
        res.status(200).json("Tour Package has been deleted");
    } catch (err) {
        next(err);
    }
};

// Get a single tour package by ID
export const getTourPackage = async (req, res, next) => {
    try {
        const tourPackage = await TourPackage.findById(req.params.id);
        res.status(200).json(tourPackage);
    } catch (err) {
        next(err);
    }
};

// Get all tour packages
export const getAllTourPackages = async (req, res, next) => {
    try {
        const tourPackages = await TourPackage.find();
        res.status(200).json(tourPackages);
    } catch (err) {
        next(err);
    }
};

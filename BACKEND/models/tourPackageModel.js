import mongoose from "mongoose";

const { Schema } = mongoose;

const TourPackageSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true,
    },
    destinations: [
        {
            location: { type: String, required: true },
            stayDuration: { type: Number, required: true }, // in days
        },
    ],
    pricePerPerson: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    availableSlots: {
        type: Number,
        required: true,
    },
    inclusions: [String], // e.g., "Meals", "Transportation", "Guided Tours"
    exclusions: [String], // e.g., "Airfare", "Visa Charges"
}, { timestamps: true });

export default mongoose.model("TourPackage", TourPackageSchema);

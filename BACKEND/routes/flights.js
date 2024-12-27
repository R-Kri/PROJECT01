import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createFlight, deleteFlight, getAllFlights, getFlight, updateFlight } from "../controllers/flight.js";
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createFlight);

// UPDATE
router.put("/:id", verifyAdmin,updateFlight);

// DELETE
router.delete("/:id", verifyAdmin, deleteFlight);

// GET
router.get("/:id", getFlight);
  
// GET ALL
router.get("/", getAllFlights);

export default router;
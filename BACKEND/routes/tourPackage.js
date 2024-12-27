import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createTourPackage, deleteTourPackage, getAllTourPackages, getTourPackage, updateTourPackage } from "../controllers/tourPackage.js";
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createTourPackage);

// UPDATE
router.put("/:id", verifyAdmin,updateTourPackage);

// DELETE
router.delete("/:id", verifyAdmin, deleteTourPackage);

// GET
router.get("/:id", getTourPackage);
  
// GET ALL
router.get("/", getAllTourPackages);

export default router;
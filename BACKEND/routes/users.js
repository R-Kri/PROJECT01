import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Authentication Check
// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.status(200).json({ message: "You are authenticated" });
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.status(200).json({ message: "Hello User, You are authenticated and can delete your account" });
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.status(200).json({ message: "Hello admin, You are authenticated and can delete all account" });
// });
  

// CREATE
router.post("/", verifyUser, createUser);

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;

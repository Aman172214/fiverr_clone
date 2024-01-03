import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createGig,
  getGig,
  getGigs,
  deleteGig,
} from "../controllers/gig.controller.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.get("/gig/:id", getGig);
router.get("/", getGigs);
router.delete("/:id", verifyToken, deleteGig);

export default router;

import express from "express";
import {
  createConvo,
  getAllConvos,
  getSingleConvo,
  updateConvo,
} from "../controllers/conversation.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getAllConvos);
router.post("/", verifyToken, createConvo);
router.get("/single/:id", verifyToken, getSingleConvo);
router.put("/:id", verifyToken, updateConvo);

export default router;

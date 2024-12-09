import express from "express";
import { createDocument } from "../controllers/createController.js";

const router = express.Router();

router.post("/create", createDocument);

export default router;

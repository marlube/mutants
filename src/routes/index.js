import { Router } from "express";
import { isMutant, getStats } from "../controllers";

const router = Router();

// Mutants and stats services
router.post("/mutant/", isMutant);
router.get("/stats", getStats);

export default router;
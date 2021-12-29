import { Router } from "express";
import { isMutant } from "../controllers";
import { countDnaValidate } from "../validators";

const router = Router();

// Mutants and stats services
router.post("/mutant/", isMutant);
router.get("/stats", countDnaValidate);

export default router;
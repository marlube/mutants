import { Router } from "express";
import { isMutant } from "../controllers";
import { countDnaValidate } from "../validators";

const router = Router();

router.post("/mutant/", isMutant);
router.get("/stats", countDnaValidate);

export default router;
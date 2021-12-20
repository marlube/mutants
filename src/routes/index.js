import { Router } from "express";
import { isMutant } from "../controllers";

const router = Router();

router.post("/mutant/", isMutant);

export default router;
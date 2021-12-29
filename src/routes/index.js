import { Router } from "express";
import { isMutant } from "../controllers";
import { validate } from "../repository/DNA";

const router = Router();

router.post("/mutant/", isMutant);
router.get("/stats", validate);
export default router;
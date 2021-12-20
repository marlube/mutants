import { request, Router } from "express";
import { getAllProducts, getProductById } from "../controllers";

const router = Router();

router.post("/mutant/", (req, res) => {
    console.log(req.body, ' Este es el dna');
});

export default router;
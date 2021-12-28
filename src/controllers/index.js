import { validateMutant } from "../utils";

export const isMutant = async(req, res) => {
    try {
        const validateIsMutant = await validateMutant(req.body.dna);
        res.status(200).json(validateIsMutant);
    } catch (error) {
        if (SyntaxError) {
            res.status(400).send({ error: error.message });
        } else {
            res.status(403).send({ error: error.message });
        }
    }
};
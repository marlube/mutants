import { validateMutant } from "../utils";

export const isMutant = async(req, res) => {
    try {
        const validateIsMutant = await validateMutant(req.body.dna);
        res.status(200).json(validateIsMutant);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
};
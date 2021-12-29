import { validateMutant } from "../utils";

export const isMutant = async(req, res) => {
    try {
        const validateIsMutant = await validateMutant(req.body.dna);
        const { isMutant } = validateIsMutant;
        const isNotMutantMessage = 'El DNA enviado pertenece a un humano';
        isMutant ? res.status(200).json(validateIsMutant) : res.status(403).send({ error: isNotMutantMessage });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
import { validateMutant } from "../utils";
import { db } from "../db";
import { countDnaValidate } from "../validators"

/**
 * Function that validate errors 
 * @param {http_request}  req  Request sent it by the user
 * @param {http_response} res  Response from mutant service 
 */
export const isMutant = async(req, res) => {
    try {
        const validateIsMutant = await validateMutant(req.body.dna);
        const { isMutant } = validateIsMutant;
        const isNotMutantMessage = 'El DNA enviado pertenece a un humano';
        const newDnaValidation = {
            dna: req.body.dna,
            isMutant
        };
        db.ref('dnaValidate').push(newDnaValidation);
        isMutant ? res.status(200).json(validateIsMutant) : res.status(403).send({ error: isNotMutantMessage });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

export const getStats = async(req, res) => {
    try {
        let statics;
        // Human and Mutant counters
        let countHuman = 0;
        let countMutant = 0;
        db.ref('dnaValidate').once('value', (snapshot) => {
            const data = snapshot.val();
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    element.isMutant ? countMutant += 1 : countHuman += 1;
                    statics = countDnaValidate(countHuman, countMutant);
                }
            }
            res.status(200).json(statics);
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
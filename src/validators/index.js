// Human and Mutant counters
let countHuman = 0;
let countMutant = 0;

/**
 * A function that validates dimensions of the Matriz NxN
 * @param {*} matriz the DNA string to validate
 * @returns Error 400 Bad Request
 */
export const validateDimentionMatriz = (matriz) => matriz.map((_, index) => {
    if (matriz.length !== matriz[index].length) {
        throw (new SyntaxError('La cadena de DNA no está balanceada, no es una matriz cuadrada'));
    }
});

/**
 * A function that validates if have allowed characters (A, T, C, G)
 * @param {*} row the DNA string to validate
 * @returns Error 400 Bad Request
 */
export const validateDnaInRow = (row) => row.every((current) => {
    if (current !== "A" && current !== "T" && current !== "C" && current !== "G") {
        throw (new SyntaxError('El DNA tiene valores invalidos'));
    }
});

/**
 * Function counts times validation 
 * @param {*} validation Boolean if is mutant or not
 * @returns Object that contains the number of humans, mutants and their ratio
 */
export const countDnaValidate = (validation) => {
    validation ? countMutant += 1 : countHuman += 1;
    return { count_mutant_dna: countMutant, count_human_dna: countHuman, ratio: countMutant / countHuman === 0 ? 1 : countHuman };
}
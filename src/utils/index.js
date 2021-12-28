export const validateMutant = (dna) => {
    if (!dna) return [];
    rowCoincidence > 0 ? rowCoincidence = 0 : null;
    const DNA = dna.map((field) => Array.from(field));
    validateDimentionMatriz(DNA);
    const isMutant = validateStringMutantDNA(DNA);
    return isMutant;
};

/**
 * count of coincidence, if the coincidence is more than one return true
 */
let rowCoincidence = 0;

/**
 * Function that validate if exist equal values on row 
 * @param {*} list the DNA string to validate
 * @returns true or false 
 */
const validateEqualValuesOnRow = (list) =>
    list.length >= 4 && list.some((current, index) => {
        const isValid = index > 1 && current === list[index - 3] && current === list[index - 2] && current === list[index - 1]
        if (isValid) rowCoincidence += 1;
        return isValid;
    });

/**
 * Function that validate if have caracters diferents 
 * @param {*} list the DNA string to validate
 * @returns Error 400 bat request
 */
const validateDnaInMatriz = (list) =>
    list.forEach((current) => {
        if (current !== "A" && current !== "T" && current !== "C" && current !== "G") {
            throw (new SyntaxError('Hay un caracter diferente a la cadena de DNA ingrese un valor valido'));
        }
    });

/**
 * Function that validate dimention of the matriz NxN
 * @param {*} matriz the DNA string to validate
 * @returns Error 400 bat request
 */
const validateDimentionMatriz = (matriz) => matriz.map((_, index) => {
    if (matriz.length !== matriz[index].length) {
        throw (new SyntaxError('La cadena de DNA no tiene todos los valores'));
    }
});

/**
 * Function that validate row 
 * @param {*} matriz the DNA string to validate
 * @returns Validated rows 
 */
const rowValidation = (matriz) => matriz.forEach((row) => {
    validateDnaInMatriz(row);
    return validateEqualValuesOnRow(row);
});

/**
 * Function that transpose columns to rows 
 * @param {*} matriz the DNA string to validate
 * @returns the matriz transpose 
 */
const transposeColumnsToRows = (matriz) => {
    let [row] = matriz;
    return row.map((_, index) => matriz.map(row => row[index]));
};

/**
 * Function that validate if the columns have a string mutant
 * @param {*} matriz the DNA string to validate
 */
const columnValidation = (matriz) => {
    let columns = transposeColumnsToRows(matriz);
    columns.forEach((column) => validateEqualValuesOnRow(column));
}

/**
 * Function that transpose diagonals to rows for validate digonals like rows
 * @param {*} matrix The DNA matriz to validate
 * @returns The diagonals like a rows 
 */
const trasposeDiagonalToList = (matrix) => {
    const matrixArea = matrix[0].length;
    if (matrixArea < 4) return [];

    const diagonalIndex = new Array(matrixArea).fill("").map((_, matrixIndex) => matrix.map((row, index) => row[index + matrixIndex]).filter(row => !!row));

    const matrixColumnsToRows = transposeColumnsToRows(matrix);

    const inverseDiagonalIndex = new Array(matrixArea).fill("").map((_, matrixIndex) => matrixColumnsToRows.map((row, index) => row[index + matrixIndex]).filter(row => !!row)).filter((_, index) => index > 0);

    return [...diagonalIndex, ...inverseDiagonalIndex];
};

/** 
 * Funcion that validate diagonal  
 * @param {*} matriz The DNA matriz to validate
 */
const diagonalValidate = (matriz) => {
    const diagonals = trasposeDiagonalToList(matriz);
    diagonals.forEach((diagonal) => validateEqualValuesOnRow(diagonal));
};

/**
 * Function that call the all validations
 * @param {*} dna The DNA string to validate
 * @returns Object that contains if a DNA is mutant or not and coincidences of the mutant strings
 */
const validateStringMutantDNA = (dna) => {
    rowValidation(dna);
    columnValidation(dna);
    diagonalValidate(dna)
    return { isMutant: rowCoincidence >= 2, rowCoincidence };
};
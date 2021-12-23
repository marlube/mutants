export const validateMutant = (dna) => {
    if (!dna) return [];
    rowCoincidence > 0 ? rowCoincidence = 0 : null;
    const DNA = dna.map((field) => Array.from(field));
    const isMutant = validateStringMutantDNA(DNA);
    return isMutant;
};

//count of coincidence, if the coincidence is more than one return true
let rowCoincidence = 0;

//Validation equal values on row 
const validateEqualValuesOnRow = (list) =>
    list.length >= 4 && list.some((current, index) => {
        const isValid = index > 1 && current === list[index - 3] && current === list[index - 2] && current === list[index - 1]
        if (isValid) rowCoincidence += 1;
        return isValid;
    });


// row Validation
const rowValidation = (matriz) => matriz.forEach((row) => {
    return validateEqualValuesOnRow(row);
});

/**
 * 
 * @param {*} matriz 
 * @returns 
 */
const transposeColumnsToRows = (matriz) => {
    console.log("matriz tranpose ", matriz);
    let [row] = matriz;
    console.log("matriz row ", row);
    return row.map((_, index) => matriz.map(row => row[index]));
};

/**
 * Function that validate if the columns have a string mutant
 * @param {*} matriz the DNA string to validate
 */
const columnValidation = (matriz) => {
    let columns = transposeColumnsToRows(matriz);
    console.log("columns ", columns);
    columns.forEach((column) => validateEqualValuesOnRow(column));
}

//diagonal validation
const trasposeDiagonalToList = (matrix) => {
    const matrixArea = matrix[0].length;
    if (matrixArea < 4) return [];

    const diagonalIndex = new Array(matrixArea).fill("").map((_, matrixIndex) => matrix.map((row, index) => row[index + matrixIndex]).filter(row => !!row));


    const matrixColumnsToRows = transposeColumnsToRows(matrix);

    const inverseDiagonalIndex = new Array(matrixArea).fill("").map((_, matrixIndex) => matrixColumnsToRows.map((row, index) => row[index + matrixIndex]).filter(row => !!row)).filter((_, index) => index > 0);

    return [...diagonalIndex, ...inverseDiagonalIndex];
};

//Diagonal Validation
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
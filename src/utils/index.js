export const validateMutant = (dna) => {
    if (!dna) return [];
    const DNA = dna.map((field) => Array.from(field));
    const data = validateEqualValuesOnRow(DNA);
    rowValidation(DNA);
    //console.log(DNA, " Este es DNA");
    return data;
};

//count of coincidence, if the coincidence is more than one return true
let rowCoincidence = 0;

const validateEqualValuesOnRow = (list) =>
    list.length >= 4 && list.some((current, index) => {
        const isValid = index > 1 && current === list[index - 3] && current === list[index - 2] && current === list[index - 1]
        if (isValid) rowCoincidence += 1;
        return isValid;
    })


// row Validation
const rowValidation = (dna) => dna.forEach((row) => {
    console.log(validateEqualValuesOnRow(row));
    return validateEqualValuesOnRow(row);
});
export const validateMutant = (dna) => {
    if (!dna) return [];
    const data = validateDiag(dna);

    return data;
};

const validateDiag = (dna) => {
    let rows = dna.length;
    let cols = dna[0].length;
    let valid1 = "";
    let valid2 = "";
    let ismutant = 0;
    for (let i = 0; i < cols + rows - 1; i++) {
        let r = i;
        let c = 0;
        let segD = cols - 1;
        let diag1 = '';
        let diag2 = '';
        let contador1 = 0;
        let contador2 = 0;
        while (r >= 0 && c < cols) {
            if (r < rows) {
                diag1 += dna[r][c];
                diag2 += dna[r][segD];
                if (valid1 === dna[r][c]) {
                    contador1 = contador1 + 1;
                }
                valid1 = dna[r][c];
                if (valid2 === dna[r][segD]) {
                    contador2 = contador2 + 1;
                }
                valid2 = dna[r][segD];
            }
            r -= 1;
            c += 1;
            segD -= 1;
            if (contador1 == 3) {
                contador1 = 0;
                console.log("se repite!!!!!" + "<br>");
                ismutant = ismutant + 1;
            }
            if (contador2 == 3) {
                contador2 = 0;
                console.log("se repite!!!!!" + "<br>");
                ismutant = ismutant + 1;
            }
        }
        //console.log(diag1 + "<br>" + diag2 + "<br>" + "<br>");
    }
    if (ismutant >= 2) {
        return "La cura!! es un MUTANTE por diagonales";
    }
};
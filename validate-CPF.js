/**
 * Verifica a validade de um número de CPF por meio dos dígitos de verificação.
 * @param  {string} cpfOriginal O CPF a ser validado.
 * @return {boolean}            False garante a invalidade; true apenas garante o formato válido do CPF, mas não afirma que ele de fato existe.
 */
function validateCPF(cpfOriginal) {
    var cpfOnlyNumber = cpfOriginal.replace(/[^\d]/g, '');
    if (cpfOnlyNumber.length !== 11) {
        return false;
    }
    var cpfOnlyNumberArray = cpfOnlyNumber.split('');
    //Verificar se todos os números são iguais
    var allIsEqual = true;
    for(var i = 0; i<10; i++){
        if(cpfOnlyNumberArray[i]!=cpfOnlyNumberArray[i+1]){allIsEqual=false;}
    }
    if(allIsEqual===true){
        return false;
    }
    //considering each number as a alphabetical letter
    var j = cpfOnlyNumberArray[9];
    var k = cpfOnlyNumberArray[10];
    //Calculate j
    var somaJ = 0;
    for (let multiplier = 10; multiplier >= 2; multiplier--) {
        somaJ += multiplier * cpfOnlyNumberArray[((multiplier - 10) * -1)];
    }
    var jResto = somaJ % 11;
    var jCalculated = (jResto == 0 || jResto == 1) ? 0 : 11 - jResto;

    if (j != jCalculated) {
        return false;
    }
    //Calculate k
    var somaK = 0;
    for (let multiplier = 11; multiplier >= 2; multiplier--) {
        somaK += multiplier * cpfOnlyNumberArray[((multiplier - 11) * -1)];
    }
    var kResto = somaK % 11;
    var kCalculated = (kResto == 0 || kResto == 1) ? 0 : 11 - kResto;

    if (k != kCalculated) {
        return false;
    } else {
        return true;
    }
}

/**
 * Verifica a validade de um número de CPF por meio dos dígitos de verificação.
 * @param  mixed $cpfOriginal O CPF a ser validado.
 * @return boolean            Retorna a validade do CPF.
 *
 * @author Heliton Martins <helitonmrf@gmai.com>
 */
function validateCPF($cpfOriginal){
    $cpfOnlyNumber = preg_replace('/[^\d]/','',$cpfOriginal);
    if(strlen((string) $cpfOnlyNumber) !== 11){
        return false;
    }
    $j = $cpfOnlyNumber[9];
    $k = $cpfOnlyNumber[10];
    //Calcular j
    $somaJ = 0;
    for($i = 10; $i>=2;$i--){
        $somaJ+=$i*$cpfOnlyNumber[(($i-10)*-1)];
    }
    $jResto = $somaJ%11;
    $jCalculated = ($jResto==0 || $jResto==1)?0:11-$jResto;

    if($j != $jCalculated){
        return false;
    }
    //Calcular k
    $somaK = 0;
    for($i = 11; $i>=2;$i--){
        $somaK+=$i*$cpfOnlyNumber[(($i-11)*-1)];
    }
    $kResto = $somaK%11;
    $kCalculated = ($kResto==0 || $kResto==1)?0:11-$kResto;

    if($k != $kCalculated){
        return false;
    }else{
        return true;
    }
}

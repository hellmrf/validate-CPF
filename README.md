# Validate-CPF
Este é um script para validação de CPFs com base nos dígitos verificadores.
## Uso
Informe um número de CPF para a função (apenas os dígitos serão considerados). Caso o número tenha um formato válido, retornará `true`.

## Atenção
Caso a função retorne `false`, é certo que aquele CPF não existe. Entretanto, o retorno `true` apenas garante que o CPF não está em um formato inválido, ou seja, que os dígitos verificadores estão corretos. Isso não significa que o cadastro existe.

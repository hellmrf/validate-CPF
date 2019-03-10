# Validate-CPF
O CPF (Cadastro de Pessoa Física) é um conjunto de 11 dígitos no formato `nnn.nnn.nnn-vv` (onde `n` representa um número e `v`, os dígitos verificadores). Esse número só será válido se (1) os dígitos verificadores forem corretos e (2) estiver associado a alguma pessoa física na Receita Federal. Isso significa que, mesmo que o número de CPF seja válido, ou seja, que seus dígitos verificadores atendam à regra, ele pode não estar associado a ninguém, tornando-o inválido.

Este script fará a validação de um CPF com base em seus dígitos verificadores, mas não dirá nada sobre a existência do cadastro (informação que só pode ser obtida juntamente à Receita Federal).

## Retorno da função
- Caso o CPF seja inválido, a `validateCPF()` retornará `false`, com a *certeza* de invalidade do número.
- Caso contrário, `validateCPF()` retornará `true`, afirmando que os dígitos verificadores correspondem.

## Uso
Esta função está disponível em PHP e Javascript.
### PHP
Inclua o arquivo da função e informe o CPF.
**Exemplo:**
```php
<?php
require('/caminho/para/a/funcao/validate-CPF.php');
$cpf = "050.598.418-25";
$cpf2 = "05059841825";

validateCPF($cpf); //retorna false pois o CPF é inválido
validateCPF($cpf2); //também retorna false. $cpf e $cpf2 serão considerados idênticos, pois apenas os números são considerados.

//A entrada também pode ser numérica:
validateCPF(05059841825);
?>
```
### Javascript
Inclua o arquivo e informe o CPF desejado.
```html
<script src="/caminho/para/o/script/validate-CPF.js"></script>
<script>
    //Nos dois casos, o retorno será igual.
    validateCPF('050.598.418-25');
    validateCPF('05059841825');
</script>
```

### Outras Linguagens
Você pode implementar o script para outras linguagens (ou melhorar o código atual) e enviar seu Pull Request!

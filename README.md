# Calculadora com Callback
Este projeto é uma calculadora simples feita em **JavaScript**, com ênfase no uso de **callback**.

## Objetivo
Mostrar de forma prática como uma função pode receber outra função como parâmetro e chamá-la depois, ou seja, usar **callback**.
## Como funciona
- `handleClick(valor, callback)` recebe um valor e uma função.
- Dentro dela, chamamos `callback(valor)`.
- A função `processarValor` é passada como callback e decide o que fazer com o valor do botão.

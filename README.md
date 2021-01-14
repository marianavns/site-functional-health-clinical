
# Functional Health Clinical

<img src="https://img.shields.io/badge/status-em%20andamento-yellow">

Projeto de uma clínica de nutrição fictícia - a Functional Health Clinical - desenvolvido durante o curso Alura [Javascript: Programando na Linguagem da Web](https://www.alura.com.br/curso-online-javascript-programando-na-linguagem-web).

Neste projeto é trabalhada a manipulação de dados entre a página HTML e a lógica de programação em javascript, a fim de automatizar o processo de cálculo de IMC, validação de informações e mudança de estilos via CSS.

A manipulação é feita com o auxílio de classes e os métodos do [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp).

<img src="./assets/images/1-woman-eating.png" width=40% align="center">

## Sumário

- [Entendendo o DOM](#Entendendo-o-DOM)

## Entendendo o DOM

Anotações rápidas a editar:

Quando importamos alguma classe do HTML e vamos imprimí-la, assim como foi feito com a classe '.paciente', não recebemos apenas o que está escrito lá no HTML com essa classe, recebemos muito mais informações!

Se ela é composta por vários fatores, será exibido um array com cada um dos itens, beleza? E cada um deles, quando aberto, traz uma série de informações que podemos buscar independentemente, usando "nomedaclasse[0]". Cada uma dessas informações é um método da classe. Alguns deles são:

`nomedaclasse[0].baseURI`: mostra em que arquivo a classe está hospedada.
`nomedaclasse[0].textContent`: mostra o conteúdo

SEMPRE REFERENCIE UM FATOR, OU SEJA, UM ELEMENTO DA ARRAY DA CLASSE.

`console.log(pacientes[0].textContent)`
`console.log(pacientes[0].baseURI)`

Mas, se você guarda algum dos fatores numa variável, vai perder todas essas características e vai ter apenas o que está escrito no HTML mesmo.

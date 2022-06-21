
const refrigerante = prompt ("Qual o valor do refrigerante?") * 3
const macarrao = prompt ("Qual o valor do macarrão?") * 4
const ervilha = prompt ("Qual o preço da ervilha?") * 3
const arroz = prompt ("Qual o preço do arroz?") * 3
const feijao = prompt ("Qual o preço do feijão?") * 2
const vinho = prompt ("Qual o valor da garrafa de vinho?") * 3
let valorTotalSemVinho = refrigerante + macarrao + ervilha + arroz + feijao
let valorTotal = valorTotalSemVinho + vinho
if (valorTotal % 0) {
    alert(`Você deve pagar R$ ${(valorTotalSemVinho/2).toFixed(2)} e o seu amigo deve pagar R$ ${(valorTotalSemVinho/2+vinho).toFixed(2)}`)
} else {
    alert(`Cada um deve pagar o valor de R$ ${(valorTotal/2).toFixed(2)}`)
}

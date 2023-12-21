let victory = 60
let defeat = 54
let diference = subtrair(victory, defeat)
let total = soma(victory, defeat)

// função para subtrair número de vitórias pelo de derrotas.
function subtrair(victory, defeat){
    let nivel = victory - defeat
    return nivel
}
// função para somar total de lutas.
function soma(victory, defeat){
    let nivel = victory + defeat
    return nivel
}
// mensagens informando total de lutas, vitórias, derrotas e diferença.
console.log(`Você tem ${total} lutas.`)
console.log(`Você ganhou ${victory}.`)
console.log(`Você perdeu ${defeat}.`)
console.log(`Seu aproveitamento é ${diference}.`)
// condicionantes para classificar rank do jogador.
if(diference <= 0) {diference = "indefinida"}
    else if(diference >= 1 && diference <= 10) {diference = "Ferro"}
    else if(diference >= 11 && diference <= 20) {diference = "Bronze"}
    else if(diference >= 21 && diference <= 50) {diference = "Prata"}
    else if(diference >= 51 && diference <= 80) {diference = "Ouro"}
    else if(diference >= 81 && diference <= 90) {diference = "Diamante"}
    else if(diference >= 91 && diference <= 100) {diference = "Lendario"}
    else {diference = "Imortal"}
// função para retornar rank do jogador.
rankHero(`${diference}`)

function rankHero(rank){
    console.log(`Sua classificação no rank é ${rank}.`)}
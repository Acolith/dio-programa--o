class dadosDoPersonagem{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    toString(){
        console.log(`Você criou um personagem chamado ${this.nome} de ${this.idade} anos e escolheu a classe ${this.tipo}.`)
    }
}

let escolhaPersonagem = new dadosDoPersonagem("Acolith", 39, "mago")

escolhaPersonagem.toString()
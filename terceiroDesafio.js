class criarPersonagem{
    contructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        return action
    }
        
    toString(){
        console.log(`Você criou um personagem chamado ${this.nome} de ${this.idade} anos e escolheu a classe ${this.tipo}.`)
        console.log(action)
    }
}

let action = `O ${this.tipo} atacou usando ${this.ataque}`
let escolhaPersonagem = new criarPersonagem()
escolhaPersonagem.toString()

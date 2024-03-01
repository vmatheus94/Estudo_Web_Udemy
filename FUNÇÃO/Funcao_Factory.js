function criarProduto(nome, preco, desconto = '10%') {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Mesa', 1499.49))

//=====================================================================
class Pessoa1 {
    constructor(nome1) {
        this.nome1 = nome1
    }
    falar() {
        console.log('Meu nome é ' + this.nome1)
    }
}

const p1 = new Pessoa1('Matheus')
p1.falar()

const criarPessoa = idade => {
    return {
        falar: () => console.log('Eu tenho ' + idade + ' anos')
    }
}

const p2 = criarPessoa(29)
p2.falar() 

//=====================================================================================
function Pessoa(nome) {
    this.nome = nome

    this.falar1 = () => console.log('Hello ' + nome)
}

const p3 = new Pessoa('Theuss')
p3.falar1()

const p4 = new Pessoa('Maria')
p4.falar1()
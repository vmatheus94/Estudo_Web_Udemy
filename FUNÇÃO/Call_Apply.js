function GetPreco(imposto = 0, moeda = 'R$ ') {
    return moeda + this.preco * ((1 - this.desc) * (1 + imposto))
}

const produto = {
    nome: 'notebook', 
    preco: 3000,
    desc: 0.15,
    GetPreco
}

console.log(produto.GetPreco())

const carro = { preco: 45000, desc: 0.20 }

console.log(GetPreco.call(carro))
console.log(GetPreco.apply(carro))

console.log(GetPreco.call(carro, 0.17, '$ '))
console.log(GetPreco.apply(carro, [0.19, '& ']))
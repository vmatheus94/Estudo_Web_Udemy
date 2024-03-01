//Desestruturação em objeto
const pessoa = {
    nome: 'Matheus',
    idade: 29,
    endereco: {
        logradouro: 'Praca Henrique IV',
        cidade: 'Aparecida'
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

//tambem posso atribuir novas nomenclaturas

const { nome: individuo, idade: vida } = pessoa
console.log(individuo, vida)

//se voce se referir a uma variavel que nao existe
//o resultado será undefined

const { endereco: { logradouro, cidade, cep} } = pessoa
console.log(logradouro, cidade, cep)

//--------------------------------------------------------
//Desestruturação em Array

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console. log(nota)

//-------------------------------------------------------------
//Desestruturação de Função

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 10, max: 40}))

//o que esta entre colchetes é um objeto, mas pode
//ser criado separado.

const obj = { min: 60 }
console.log(rand(obj))

//--------------------------------------------------------------------
//Desestruturação em Array com Função

function rando([ min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rando([50, 40]))
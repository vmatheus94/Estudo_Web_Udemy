// par nome/valor
const saudacao = 'Olá' //contexto léxico 1
console.log(saudacao)

function exec(){
    const saudacao = 'helloo' //contexto lexico 2
    return saudacao
}
console.log(exec())

//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome:'Matheus',
    idade: 29,
    peso: 75,
    endereco: {
        logradouro: 'Praca Henrique IV',
        bairro: 'Cruzeiro do Sul'
    }
}
console.log(Cliente)
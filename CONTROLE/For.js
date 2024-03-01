let contador = 1
 while (contador <= 10) {
    console.log('contador = ' + (contador))
    contador++
 }

 for (let i = 1; i <= 10; i++) {
    console.log('i = ' + i)
 }
const pessoa = {
    nome: 'Matheus',
    cidade: 'Aparecida',
    idade: 29
}

for (let atributo in pessoa) {
    console.log(atributo + ' = ' + (pessoa[atributo]))
}
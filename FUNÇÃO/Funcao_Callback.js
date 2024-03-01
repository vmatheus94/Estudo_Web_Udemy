// função callback 1
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log((indice + 1) + '. ' + (nome))
}

fabricantes.forEach(imprimir)

// função callback 2
const notas = [7.7, 6.5, 5.2, 8.9]

notasBaixas = notas.filter(function(nota) {
    return nota <= 7
})

console.log(notasBaixas)

const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

//
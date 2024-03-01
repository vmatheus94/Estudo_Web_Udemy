function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 3) {
    opcao = getInteiroAleatorio(-1, 5)
    console.log('Opção escolhida foi ' + (opcao))
}

console.log('Até a próxima')

//=====================================================================
// DO/WHILE

function getInteiroAleatorioX(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcaoX = -1

do {
    opcaoX = getInteiroAleatorio(-1, 6)
    console.log('Opção escolhida foi ' + (opcaoX))
} while (opcaoX != 3) 

console.log('Até a próxima')
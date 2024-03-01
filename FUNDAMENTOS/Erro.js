function tratarErroELancar(erro) {
    throw new Error('Errado!')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
    tratarErroELancar(e)
    }
}

const obj = { nome: 'Matheus'}
imprimirNomeGritado(obj)
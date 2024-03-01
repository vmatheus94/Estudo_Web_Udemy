const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
        case 7:
        case 6:         
            console.log('Aprovado')  
            break 
        case 5:
        case 4:
        case 3:
            console.log('Reprovado')   
            break 
        default:
            console.log('Te vejo ano que vem')            
    }
}

imprimirResultado(7.9)
imprimirResultado(4)
imprimirResultado(0)
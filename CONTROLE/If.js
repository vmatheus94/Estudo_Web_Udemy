function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else { 
        console.log('Reprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.5)

function teste1(num) {
    if(num > 7) {
    console.log(num)
    console.log('Final')
    }
}

teste1(6)
teste1(8)

function Noticia(nota) {
    if (nota >= 7 && nota <= 10) {
        console.log('Aprovado com Louvor!')
    } else if(nota >= 4 && nota <= 6) { 
        console.log('Reprovado por pouco!')
    } else if(nota <= 3) {
        console.log('Reprovadíssimo, estude mais!')
    }
}

Noticia(8)
Noticia(6)
Noticia(3)
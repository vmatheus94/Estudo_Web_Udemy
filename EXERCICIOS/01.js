function calculo(x = 0, y = 0) {
    return console.log(
        x + y, 
        x - y,
        x * y,
        x / y
        )
}

calculo(10, 2)

function verifica(a, b, c) { 
    if (a == b && a == c) {
      console.log('Equilatero')
    } else if (a == b || a == c || b == c) {
        console.log('Isosceles')
    } else {
        console.log('Escaleno')
    }
}

verifica(1, 2, 1)

function MontaBase(base, expoente) {
    return console.log(base ** expoente) 

}

MontaBase(10,2)
function carro(max = 200, delta = 5) {
    //atributo privado
    let velocidade = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidade + delta <= max) {
            velocidade += delta
        } else {
            velocidade = max
        }
    }

    //metodo publico
    this.getvelocidade = function () {
        return velocidade
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidade())

//nova instancia do objeto
const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getvelocidade())
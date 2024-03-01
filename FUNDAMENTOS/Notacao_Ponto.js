console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'caderno'
obj1.quant = 20
console.log(obj1)
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log(5 + 5 )
    }
    this.idade = 29
}

const obj2 = new Obj('mesa')
const obj3 = new Obj('armario')
console.log(obj2)
console.log(obj3.nome)
obj3.exec()
console.log(obj3.idade)
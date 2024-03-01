//função Arrow criada pra ter uma sintaxe reduzida
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro =  a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

ola = _=> 'Olá'
console.log(ola())

//THIS com função Arrow

/*  function Pessoa() {
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}   

new Pessoa  */

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this ===param)
comparaComThisArrow(global)

//a mudança de contexto quando em função arrow não ocorre
// mesmo que se use um bind
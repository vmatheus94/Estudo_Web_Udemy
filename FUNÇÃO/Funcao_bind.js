//BIND amarra uma função a um objeto
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
       console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //gerou conflito entre paradigmas: funcional e 00

const falar2 = pessoa.falar.bind(pessoa)
falar2()

//=================================================================
//outra forma de utilizar o BIND

/*function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000)
}*/

new Pessoa
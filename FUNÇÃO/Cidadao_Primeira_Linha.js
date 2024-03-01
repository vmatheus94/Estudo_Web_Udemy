// função forma literal
function fun1() { }

//Armazenar em uma variavel
const fun2 = function() { }

// Armazenar funcção em um array
const array = [function(a, b) { return a + b }, fun1, fun2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Testando...')})

//Uma função pode retornar ou conter uma outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 1)(5)
const somaNovo = soma(2, 3)
somaNovo(6)
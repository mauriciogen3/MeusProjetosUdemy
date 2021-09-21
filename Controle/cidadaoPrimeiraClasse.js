//quando a linguagem trata a funcao como um dado

// higher-order function

//criar de forma literal
function fun1() {}

//armazenar em uma variavel
const fun2 = function() {}

//armazenar em um array
const array = [function (a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))
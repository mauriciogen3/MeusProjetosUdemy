console.log(soma(3, 4))
//esse console.log so funciona antes da funcao quando é uma function declaration,
//todas as demais so funcionam apos ser chamada na funcao.

//function declaration
function soma(x, y) {
  return x + y
}

//function express
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4))
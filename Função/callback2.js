const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//SEM CALLBACK
const notasBaixas1 = []
//FOR IN  >< FOR OF
for (let i in notas) {
  //PARA INSERIR AS NOTAS BAIXAS DENTRO DE UM ARRAY PRIMEIRO DEVE-SE CONSTRUIR UM ARRAY VAZIO
  if (notas[i] < 7) {
    // push adiciona um valor ao array
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)

//-------------------------------------------------------------------------------
// COM CALLBACK

const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)

//---------------------OU----------------

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//--------------------  OU -----------------
const notasMenorQue7 = nota => nota < 8;
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)

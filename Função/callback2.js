const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//SEM CALLBACK
let notasBaixas = []
//FOR IN  >< FOR OF
for (let i in notas) {
  //PARA INSERIR AS NOTAS BAIXAS DENTRO DE UM ARRAY PRIMEIRO DEVE-SE CONSTRUIR UM ARRAY VAZIO
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)
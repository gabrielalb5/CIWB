const tamanhos = [38, 42, 39, 40, 38, 40, 37, 44, 37, 42, 41, 44, 37, 42]
const lado = ["E","E","E","D","D","D","E","D","D","D","E","E","E","D"]

let esquerdos = tamanhos.filter((x,index)=> lado[index]=="E");
let direitos = tamanhos.filter((x,index)=> lado[index]=="D");
console.log(esquerdos);
console.log(direitos);

//Resolução na próxima aula
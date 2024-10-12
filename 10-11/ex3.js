const tamanho = 10;
const intervalo = 100;
const vetor = [];
var mediana;

console.log("Vetor aleatório de "+tamanho+" posições de 0 até "+intervalo);

for(var i=0;i<tamanho;i++){
    vetor[i] = Math.floor(Math.random() * intervalo+1);
}
console.log("Vetor: "+vetor.join(', '));

vetor.sort((a, b) => a - b);

console.log("Depois de ordenado: "+vetor.join(', '));


if(tamanho%2 == 0){
    mediana = (vetor[tamanho/2-1]+=vetor[tamanho/2])/2;
}else{
    mediana = vetor[(tamanho-1)/2];
}

console.log("A mediana é "+mediana);
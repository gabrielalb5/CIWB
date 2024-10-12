var abrev = [];
var i = 0;
let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

for(fruta of frutas){
    abrev[i] = fruta.substring(0, 3);
    i++;
}

for(i=0;i<abrev.length;i++){
    console.log(abrev[i]);
}

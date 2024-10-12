function traduzir(frase){
    var i;
    var resultado = '';
    for(i=0;i<frase.length;i++){
        if((frase[i]==frase[i+2]) && (frase[i+1]==frase[i+3]) && (frase[i-1]==" ")){
            i += 2;
        }
        resultado += frase[i];
    }
    return resultado;
}

const texto1 = 'Juca comprou fafarinha na memercearia e papagou 4 reais o quilo. A mamae de Juca pediu para ele comprar mamais 2 quilos.';
const texto2 = 'O papassarinho vovoou para bem longe.';

console.log(traduzir(texto1));
console.log(traduzir(texto2));

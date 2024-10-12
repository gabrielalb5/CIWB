function contarVogais(palavra){
    const vogais = ['a','e','i','o','u'];
    palavra = palavra.toLowerCase();
    var contador=0;
    
    for(var i=0;i<palavra.length;i++){
        for(var j=0;j<vogais.length;j++){
            if(palavra[i] == vogais[j]){
                contador++;
            }
        }
    }
    return contador;
}

let qtde = contarVogais('interestelar');
console.log('Vogais:', qtde);

const offset = 4;
const secret = 'LIPPSASVPH';
//Teste com a frase: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
//offset = 4: XLI UYMGO FVSAR JSB NYQTW SZIV XLI PEDC HSK
//offset = 13: GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT
let message = '';

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for(var i=0;i<secret.length;i++){
    for(var j=0;j<alfabeto.length;j++){
        if(secret[i]==alfabeto[j]){
            if(j-offset>=0){
                message += alfabeto[j-offset]
            }else{
                message += alfabeto[26+(j-offset)];
            }
            
        }
    }
}

console.log(message);
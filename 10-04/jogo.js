let num = 50;

do{
    var adivinha = parseInt(prompt("Adivinhe o número [1-100]:"));
    if(adivinha>100 || adivinha<1){
        alert("Inválido. O número está no intervalo de 1 a 100");
    }else{
        if(adivinha>num){
            alert("Tente um número menor");
        }else if(adivinha<num){
            alert("Tente um número maior");
        }
    }
}while(adivinha!=num);
    
    alert("Parabéns! você acertou :)");
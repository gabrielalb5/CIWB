function processar(limite, statusCallback){
    for(let i=0;i<limite;i++){
        if(i%10==0){
            statusCallback(i);
        }
    }
}

let registradora = function(step){
    console.log('Step:', step)
}

processar(100, registradora);
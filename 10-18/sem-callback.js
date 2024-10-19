function processar(limite){
    for(let i=0;i<limite;i++){
        if(i%10==0){
            console.log('Step:', i);
        }
    }
}

processar(100);
function processar(limite, statusCallback){
    for(let i=0;i<limite;i++){
        if(i%10==0){
            statusCallback(i);
        }
    }
}

processar(100, function myStatus(step){
    console.log('Step:', step)
});
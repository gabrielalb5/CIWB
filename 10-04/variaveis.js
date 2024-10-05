function escopoVar(){
    if(2>1){
        var x = 10;
        console.log("[Dentro do if]",x);
    }
    console.log('[Fora do if]',x);
}
function escopoLet(){
    if(2>1){
        let x = 10;
        console.log("[Dentro do if]",x);
    }
    console.log('[Fora do if]',x);
}

escopoVar();
escopoLet();
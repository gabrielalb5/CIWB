let t1 = "13:30:10";
let t2 = "13:31:05";

function tempoDecorrido(t1, t2){
    t1 = t1.split(":",3);
    t2 = t2.split(":",3);
    t1 = converteSegundos(t1[0],t1[1],t1[2]);
    t2 = converteSegundos(t2[0],t2[1],t2[2]);
    let resultado = t2-t1;
    return resultado;
}

function converteSegundos(hora, min, s){
    hora = parseInt(hora);
    min = parseInt(min);
    s = parseInt(s);
    hora = hora*60*60;
    min = min*60;
    s = hora+min+s;
    return s;
}

console.log(tempoDecorrido(t1,t2));
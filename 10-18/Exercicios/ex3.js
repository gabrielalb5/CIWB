function converteSegundos(hora, min, s){
    hora = hora*60*60;
    min = min*60;
    s = hora+min+s;
    return s;
}

converteSegundos(10,45,20);
converteSegundos(24,0,0)
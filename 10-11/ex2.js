const xs = [5, 3, 6, 1, 2, 4];
var menor, pos;

for(var i=0;i<xs.length;i++){
    if(i==0){
        menor = xs[i];
        pos = i;
    }else if(xs[i]<menor){
        menor = xs[i];
        pos = i;
    }
}

console.log(pos);
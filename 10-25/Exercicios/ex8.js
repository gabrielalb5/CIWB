const botas = [
    {tamanho: 38, pe: 'E'},
    {tamanho: 42, pe: 'E'},
    {tamanho: 39, pe: 'E'},
    {tamanho: 40, pe: 'D'},
    {tamanho: 38, pe: 'D'},
    {tamanho: 40, pe: 'D'},
    {tamanho: 37, pe: 'E'},
    {tamanho: 44, pe: 'D'},
    {tamanho: 37, pe: 'D'},
    {tamanho: 42, pe: 'D'},
    {tamanho: 41, pe: 'E'},
    {tamanho: 44, pe: 'E'},
    {tamanho: 37, pe: 'E'},
    {tamanho: 42, pe: 'D'}
];

var numeros = [];
var pes = '';

for(let bota of botas){
    numeros.push(bota.tamanho);
}

console.log(numeros);

for(let bota of botas){[]
    pes += bota.pe
}

console.log(pes);

const base = 37;
let esquerdos = new Array(8);
let direitos = new Array(8);
esquerdos.fill(0);
direitos.fill(0);

/* processando entradas */
for (let i=0; i < numeros.length; i++) {
    const n = numeros[i];
    const pe = pes[i];

    const pos = n - base;
    if (pe == 'E') {
        esquerdos[pos]++;
    } else {
        direitos[pos]++;
    }
}

/* gerando saí­da */
for (let i=0; i < direitos.length; i++) {
    const min = direitos[i] < esquerdos[i] ? direitos[i] : esquerdos[i];
    if (min > 0) {
        const num = base + i;
        console.log(num, min);
    }
}
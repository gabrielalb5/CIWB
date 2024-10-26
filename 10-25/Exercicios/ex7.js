const alunos = [
    {idade: 13, altura: 1.40},
    {idade: 14, altura: 1.55},
    {idade: 15, altura: 1.70},
    {idade: 16, altura: 1.65},
    {idade: 17, altura: 1.72},
    {idade: 18, altura: 1.75},
    {idade: 13, altura: 1.45},
    {idade: 14, altura: 1.50},
    {idade: 15, altura: 1.60},
    {idade: 16, altura: 1.73},
    {idade: 17, altura: 1.67},
    {idade: 18, altura: 1.82},
    {idade: 13, altura: 1.46},
    {idade: 14, altura: 1.53},
    {idade: 15, altura: 1.65},
    {idade: 16, altura: 1.77},
    {idade: 17, altura: 1.80},
    {idade: 18, altura: 1.83},
    {idade: 13, altura: 1.42},
    {idade: 14, altura: 1.57},
    {idade: 15, altura: 1.62},
    {idade: 16, altura: 1.70},
    {idade: 17, altura: 1.85},
    {idade: 18, altura: 1.88},
    {idade: 13, altura: 1.49},
    {idade: 14, altura: 1.59},
    {idade: 15, altura: 1.66},
    {idade: 16, altura: 1.79},
    {idade: 17, altura: 1.90},
    {idade: 18, altura: 1.72}
];

let mediaAltura=0;

for(let a of alunos){
    mediaAltura += a.altura;
}
mediaAltura = mediaAltura/alunos.length;

console.log("A média de altura é de "+mediaAltura+"m");

acimaMedia = alunos.filter(a => a.altura>mediaAltura);

console.log("Dentre os "+alunos.length+" apenas "+acimaMedia.length+" medem mais que a média");
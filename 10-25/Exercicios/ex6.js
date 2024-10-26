let produtos = [
    {
        id: 1,
        nome: "Caneta BIC Cristal 0.7mm",
        preco: 6.6,
        descVista: 10,
    },
    {
        id: 2,
        nome: "Caneta Esferográfica Trilux",
        preco: 5.5,
        descVista: 0,
    },
    {
        id: 3,
        nome: "Lapiseira 0.5mm Pentel",
        preco: 27.9,
        descVista: 15,
    },
    {
        id: 4,
        nome: "Grafite Fino 0.5mm HB 2 Faber-Castell",
        preco: 10.9,
        descVista: 5,
    },
    {
        id: 5,
        nome: "Pincel quadro branco recarregável",
        preco: 9.8,
        descVista: 0,
    }
];

var total=0;
var totalDesc=0;
console.log("Meu carrinho de compras\n");
for(let p of produtos){
    console.log(p.id+" - "+p.nome+" custa R$"+p.preco);
    total += p.preco;
    if(p.descVista>0){
        totalDesc += p.preco*(1-(p.descVista/100));
    }else{
        totalDesc += p.preco;
    }
}
console.log("Total a pagar - R$"+total);
console.log("Total a pagar com descontos - R$"+totalDesc);
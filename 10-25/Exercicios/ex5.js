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

console.log("Produtos que custam menos que R$10\n");
let menorQue10 = produtos.filter(p => p.preco<10);
for(let m of menorQue10){
    console.log(m.id+" - "+m.nome+" custa R$"+m.preco)
}

console.log("\nProdutos que não tem desconto à vista\n");
let semDesc = produtos.filter(p => p.descVista<=0);
for(let s of semDesc){
    console.log(s.id+" - "+s.nome+" custa R$"+s.preco)
}

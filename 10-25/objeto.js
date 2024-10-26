//CRIANDO OBJETO
let cliente = {
	nome: 'João',
    email: 'joao@zipmail.com.br',
    isAdmin: true,

    dizerOi: function (){
        console.log('Oi! Eu sou o', this.nome,'!');
    }
};

console.log(cliente)
console.log(cliente.nome)

//cliente.nome = "Joana";
//console.log(cliente.nome);

cliente.dizerOi();

//VETOR DE OBJETOS
let produtos = [
    {
        nome: 'Sabão',
        preco: 2.40
    },
    {
        nome: 'Arroz',
        preco: 40.00
    },
    {
        nome: 'Café',
        preco: 20.00
    },
];

produtos[0]
produtos[0].nome

//VETOR A PARTIR DE VETOR DE OBJETOS
//Duas maneiras
let nomes = [];
for(let prod of produtos){
    nomes.push(prod.nome);
}
nomes;
//OU let nomes = produtos.map(p => p.nome);

//PRODUTOS QUE CUSTAM MAIS DO QUE R$10
let caros = [];
for(let prod of produtos){
    if(prod.preco>10){
        caros.push(push);
    }
}
//OU let caros = produtos.filter(p => p.preco>10);
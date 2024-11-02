const data = {
    "cep": "14802-000",
    "logradouro": "Avenida Padre Francisco Sales Colturato",
    "complemento": "lado par",
    "unidade": "",
    "bairro": "Centro",
    "localidade": "Araraquara",
    "uf": "SP",
    "estado": "São Paulo",
    "regiao": "Sudeste",
    "ibge": "3503208",
    "gia": "1818",
    "ddd": "16",
    "siafi": "6163"
};

var logradouro = document.querySelector("#logradouro");
var bairro = document.querySelector("#bairro");
var cidade = document.querySelector("#cidade");
var estado = document.querySelector("#estado");

preencher();

function preencher(){
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.estado;
}
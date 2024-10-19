function gerarIdadesAleatorias() {
    let idades = [];
    for(let i=0;i<30;i++){
        let idade = Math.floor(Math.random()*(15-12+1))+12;
        idades.push(idade);
    }
    return idades;
}

function gerarAlturasAleatorias() {
    let alturas = [];
    for(let i=0;i<30;i++){
        let altura = (Math.random()*(1.80-1.40)+1.40).toFixed(2);
        alturas.push(parseFloat(altura));
    }
    return alturas;
}

function media(altura){
    let soma = 0;
    for(let i=0;i<altura.length;i++){
        soma += altura[i];
    }
    return soma/altura.length;
}

let idades = gerarIdadesAleatorias();
let alturas = gerarAlturasAleatorias();
let alturaMedia = media(alturas);

let quantidadeAlunos = alturas.filter((x) => x>alturaMedia).length;

console.log("Há "+quantidadeAlunos+" alunos acima da média de altura da turma ("+alturaMedia.toFixed(2)+" m)");

let alturasOrdenadas = alturas.sort();
console.log("Todas as alturas em ordem crescente: " + alturasOrdenadas.join(", "));
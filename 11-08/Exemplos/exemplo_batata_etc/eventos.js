let opcao = 'cenoura';

function carregar() {
        let img = document.createElement('img');
        img.src = opcao + '.jpg';
        img.height = 200;

        let div = document.querySelector('#main');
        div.appendChild(img);
}

let botao = document.querySelector('#btn-carregar');
botao.addEventListener('click', carregar);

let radios = document.querySelectorAll('input[type=radio]');
for (let radio of radios) {
        radio.addEventListener('change', (e) => {opcao = e.target.value});
}

/*
document.addEventListener('DOMContentLoaded', function(event) {
        let botao = document.querySelector('#btn-carregar');
        botao.addEventListener('click', carregar);
});
*/


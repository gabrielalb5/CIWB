function carregar() {
        let img = document.createElement('img');
        img.src = 'cenoura.jpg';
        img.height = 200;

        let div = document.querySelector('#main');
        div.appendChild(img);
}

let botao = document.querySelector('#btn-carregar');
botao.addEventListener('click', carregar);

/*
document.addEventListener('DOMContentLoaded', function(event) {
        let botao = document.querySelector('#btn-carregar');
        botao.addEventListener('click', carregar);
});
*/


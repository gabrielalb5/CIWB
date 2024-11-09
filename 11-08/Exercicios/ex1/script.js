var img = document.createElement('img');

function carregar() {
        let opcao = select.value;
        img.src = opcao + '.jpg';
        img.alt = opcao;
        img.height = 200;
        let div = document.querySelector('#main');
        div.appendChild(img);
}

var select = document.querySelector("#marca");
select.addEventListener('change', carregar);
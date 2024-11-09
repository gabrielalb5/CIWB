function adicionarItem() {
        let txtItem = document.querySelector('#item-compra');
        let descricao = txtItem.value;

        let item = document.createElement('li');
        item.innerText = descricao;

        let listaItens = document.querySelector('#lista-itens');
        listaItens.appendChild(item);
}


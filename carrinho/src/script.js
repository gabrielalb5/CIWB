var conteudoCarrinho = document.querySelector('#cart_products');

if (conteudoCarrinho.children.length == 0) {
    conteudoCarrinho.innerHTML = '<p>Carrinho vazio</p>';
}

var addBtns = document.querySelectorAll('.add_to_cart');
for(let btn of addBtns){
    btn.addEventListener('click',adicionarCarrinho);
}

function adicionarCarrinho(e){
    let li = e.target.closest('li');
    let h3 = li.querySelector('h3');
    let productName = h3.textContent;
    
    if (conteudoCarrinho.innerHTML === '<p>Carrinho vazio</p>') {
        conteudoCarrinho.innerHTML = '';
    }

    console.log(productName);
}

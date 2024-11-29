let conteudoCarrinho = document.querySelector('#cart_products');

if (conteudoCarrinho.children.length == 0) {
    conteudoCarrinho.innerHTML = '<p>Carrinho vazio</p>';
}

let addBtns = document.querySelectorAll('.add_to_cart');
for(let btn of addBtns){
    btn.addEventListener('click',adicionarCarrinho);
}

function adicionarCarrinho(e){
    let li = e.target.closest('li');
    let h3 = li.querySelector('h3');
    let p = li.querySelector('p')

    let productName = h3.textContent;
    let productPrice = p.textContent;
    
    if (conteudoCarrinho.innerHTML === '<p>Carrinho vazio</p>') {
        conteudoCarrinho.innerHTML = '';
        let tabelaCarrinho = document.createElement('table');
        conteudoCarrinho.appendChild(tabelaCarrinho);
        let tbody = document.createElement('tbody');
        tabelaCarrinho.appendChild(tbody);
    }

    let tbody = conteudoCarrinho.querySelector('tbody');
    let items = tbody.querySelectorAll('tr');

    for(let item of items){
        console.log(item);
        /*if(productName == item.querySelector('')){

        }*/
    }
    

    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${productName}</td>
                    <td>${productPrice}</td>
                    <td></td>
                    <td>Remover</td>`;
    tbody.appendChild(tr);

    console.log(productName);
}

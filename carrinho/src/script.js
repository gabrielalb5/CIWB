let cartContent = document.querySelector('#cart_products');
let conteudoCarrinho = localStorage.getItem('conteudoCarrinho');

document.addEventListener('DOMContentLoaded', carregarCarrinho);

function carregarCarrinho(){
    if(cartContent.children.length == 0){
        cartContent.innerHTML = conteudoCarrinho;
    }else{
        cartContent.innerHTML = '<p>Carrinho vazio</p>';
    }
    let removeBtns = document.querySelectorAll('.btn-remove');
    for (let btn of removeBtns) {
        btn.addEventListener('click', remover);
    }
    let removeAllBtn = document.querySelector('#cart_remove_all');
    if (removeAllBtn) {
        removeAllBtn.addEventListener('click', removerTudo);
    }
    let quantityInputs = document.querySelectorAll('input');
    for(let input of quantityInputs){
        input.addEventListener('change',calcularTotal);
    }
    calcularTotal();
}

let addBtns = document.querySelectorAll('.add_to_cart');
for(let btn of addBtns){
    btn.addEventListener('click',adicionarCarrinho);
}

let quantityInputs = document.querySelectorAll('input');
for(let input of quantityInputs){
    input.addEventListener('change',calcularTotal);
}

function adicionarCarrinho(e){
    let li = e.target.closest('li');
    let h3 = li.querySelector('h3');
    let p = li.querySelector('p')

    let productName = h3.textContent;
    let productPrice = p.textContent;
    
    if(cartContent.innerHTML === '<p>Carrinho vazio</p>') {
        cartContent.innerHTML = '';
        let cartTable = document.createElement('table');
        cartContent.appendChild(cartTable);
        let tbody = document.createElement('tbody');
        cartTable.appendChild(tbody);
        let tfoot = document.createElement('tfoot');
        tfoot.innerHTML = `<tr>
                            <td>Subtotal:</td>
                            <td></td>
                            <td></td>
                            </tr>`;
        cartTable.appendChild(tfoot);

        let removeAllBtn = document.createElement('button');
        removeAllBtn.textContent = 'Remover tudo';
        removeAllBtn.id = 'cart_remove_all';
        cartContent.appendChild(removeAllBtn);
        removeAllBtn.addEventListener('click',removerTudo);
    }

    let tbody = cartContent.querySelector('tbody');
    let items = tbody.querySelectorAll('tr');
    let onCart = false;

    for(let item of items){
        let itemName = (item.querySelector('td:nth-child(1)')).textContent;

        if(productName == itemName){
            onCart = true;
            let quantityInput = item.querySelector('td:nth-child(3) input')
            if(quantityInput.value>=99){
                quantityInput.value = 99;
            }else{
                quantityInput.value = parseInt(quantityInput.value, 10) + 1;
            }
        }
    }
    
    if(!onCart){
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${productName}</td>
                        <td>${productPrice}</td>
                        <td><input type="number" value="1" step="1" min="1" max="99"></td>
                        <td><button class="btn-remove"><span class="material-symbols-outlined">delete</span></button></td>`;
        tbody.appendChild(tr);

        let quantityInput = tr.querySelector('input');
        quantityInput.addEventListener('change', calcularTotal);
    }

    let removeBtns = document.querySelectorAll('.btn-remove');
    for(let btn of removeBtns){
        btn.addEventListener('click',remover);
    }

    calcularTotal();

    localStorage.setItem('conteudoCarrinho',cartContent.innerHTML);
}

function calcularTotal(){
    let tbody = cartContent.querySelector('tbody');
    let items = tbody.querySelectorAll('tr');
    let tfoot = cartContent.querySelector('tfoot');

    let total = 0;
    let totalItens = 0;

    for(let item of items){
        let priceCell = (parseFloat(item.querySelector('td:nth-child(2)').textContent.replace('R$', '').replace(',', '.'))).toFixed(2);
        let quantityCell = item.querySelector('td:nth-child(3) input');
        let quantity = parseInt(quantityCell.value, 10);
        total += priceCell*quantity;
        totalItens += quantity;
        console.log(quantity);
        quantityCell.setAttribute("value", quantity);
    }

    tfoot.querySelector('td:nth-child(2)').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    tfoot.querySelector('td:nth-child(3)').textContent = `${totalItens} itens`;

    localStorage.setItem('conteudoCarrinho',cartContent.innerHTML);
}

function remover(e){
    let row = e.target.closest('tr');
    row.remove();
    if (cartContent.children.length == 0 || cartContent.querySelector('tbody').children.length == 0) {
        cartContent.innerHTML = '<p>Carrinho vazio</p>';
        localStorage.setItem('conteudoCarrinho',cartContent.innerHTML);
    }
    calcularTotal();
    localStorage.setItem('conteudoCarrinho',cartContent.innerHTML);
}

function removerTudo(){
    let table = cartContent.querySelector('table');
    table.remove();
    cartContent.innerHTML = '<p>Carrinho vazio</p>';
    localStorage.setItem('conteudoCarrinho',cartContent.innerHTML);
}
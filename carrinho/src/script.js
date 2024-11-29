let cartContent = document.querySelector('#cart_products');

if (cartContent.children.length == 0) {
    cartContent.innerHTML = '<p>Carrinho vazio</p>';
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
    
    if(cartContent.innerHTML === '<p>Carrinho vazio</p>') {
        cartContent.innerHTML = '';
        let cartTable = document.createElement('table');
        cartContent.appendChild(cartTable);
        let tbody = document.createElement('tbody');
        cartTable.appendChild(tbody);
        let tfoot = document.createElement('tfoot');
        tfoot.innerHTML = `<tr>
                            <td>Subtotal:</td>
                            <td>${productPrice}</td>
                            </tr>`;
        cartTable.appendChild(tfoot);
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
                        <td><input type="number" value="1" name="${productName}qtd" step="1" min="1" max="99"></td>
                        <td>Remover</td>`;
        tbody.appendChild(tr);
    }
}
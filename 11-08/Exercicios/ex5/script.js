let tbody = document.querySelector('tbody');

function remover(e){
    let link = e.target.closest('a');
    let td = link.parentElement;
    let tr = td.parentElement;
    let tbody = tr.parentElement;
    tbody.removeChild(tr);

    if(tbody.children.length == 0){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute('colspan', 3);
        td.textContent = "Sem dados";
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

let links = document.querySelectorAll('a');

for(let link of links){
    link.addEventListener('click', remover);
}

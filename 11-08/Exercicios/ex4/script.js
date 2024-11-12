function myListener(e) {
    let div = e.target.parentElement;
    let p = document.createElement('p');
    p.textContent = "Oi, mundo!";
    div.appendChild(p);
}   

const btn = document.querySelector('#btn');
btn.addEventListener('click', myListener);
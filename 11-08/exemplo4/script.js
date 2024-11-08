function sayHello(e){
    console.log('Oi! Eu sou o '+
        e.target.textContent + '!');
}

const btn1 = document.querySelector('#btn1');
//btn1.onclick = sayHello;
btn1.addEventListener('click',sayHello);
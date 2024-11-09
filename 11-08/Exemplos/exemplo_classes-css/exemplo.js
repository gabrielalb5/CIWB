function destacar() {
    const spans = document.querySelectorAll('span');
    for (let span of spans) {
        span.classList.add('destaque');
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', destacar);
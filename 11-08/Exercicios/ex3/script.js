function showId(e){
    console.log(e.target.id);
}

let btns = document.querySelectorAll('.btn');

for(let btn of btns){
    btn.addEventListener('click',showId);
}
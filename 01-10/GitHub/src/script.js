async function buscar(usuario){
    const url = `https://api.github.com/users/${usuario}`;
    const url_repos = `https://api.github.com/users/${usuario}/repos`
    
    let section = document.querySelector("section");
    section.innerHTML = ""; 

    let response = await fetch(url);
    let response_repos = await fetch(url_repos);

    let p = document.createElement("p");
    let img = document.createElement("img");
    let p2 = document.createElement("p");
    
    p.id = "nome"
    img.id = "foto"

    if (response.ok){
        let data = await response.json();

        section.appendChild(img);
        section.appendChild(p);

        p.textContent = data['name'];
        img.src = data['avatar_url'];
    }else{
        section.appendChild(p);
        p.textContent = "Usuário não encontrado"
    }

    section.appendChild(p2)

    if (response_repos.ok){
        let data = await response_repos.json();
        p2.textContent = data.length+" repositórios públicos";
    }else{
        p2.textContent = "Quantidade de repositórios não identificada"
    }
}

function main(){
    let btn = document.querySelector("#carregar");
    btn.addEventListener('click', function(){
        let usuario = document.querySelector("#usuario").value;
        buscar(usuario);
    });
}
main();
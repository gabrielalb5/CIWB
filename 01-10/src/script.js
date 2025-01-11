async function buscar(input_cep){
    const url = `https://viacep.com.br/ws/${input_cep}/json/`;

    let response = await fetch(url);
    if (response.ok){
        let data = await response.json();
        console.log("Rua: ", data['logradouro'])
    }
}

function main(){
    let btn = document.querySelector("#carregar");
    btn.addEventListener('click', function(){
        let input_cep = document.querySelector("#input_cep");
        let cep = input_cep.value;
        buscar(input_cep);
    });
}
main();
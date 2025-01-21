document.querySelector('#form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cidade = document.querySelector('#cidade').value;

    if(!cidade){
        document.querySelector('#clima').classList.remove('show');
        return showAlert('Você precisa digitar uma cidade');
    }

    const key = '8a60b2de14f7a17c7a11706b2cfcd87c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=${key}&units=metric&lang=pt_br`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    console.log(json);

    if(json.cod === 200){
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            icon: json.weather[0].icon,
            wind: json.wind.speed,
            humidity: json.main.humidity
        });
    }else{
        showAlert('Não foi possível localizar essa cidade');
        document.querySelector('#clima').classList.remove('show');
    }
});

function showInfo(json){
    showAlert('')

    document.querySelector('#clima').classList.add('show');
    document.querySelector('#titulo').innerHTML = `<i class="fa-solid fa-location-dot has-text-primary"></i> ${json.city}`;
    document.querySelector('#bandeira').setAttribute('src',`https://flagsapi.com/${json.country}/flat/32.png`)
    document.querySelector('#temp_atual').innerHTML = `${json.temp.toFixed(1).toString().replace('.',',')} °C`;
    document.querySelector('#temp_descricao').innerHTML = `${json.description.charAt(0).toUpperCase()}${json.description.slice(1)}`;
    document.querySelector('#temp_img').setAttribute('src',` https://openweathermap.org/img/wn/${json.icon}@2x.png`);

    document.querySelector('#temp_max').innerHTML = `${json.tempMax.toFixed(1).toString().replace('.',',')} °C`;
    document.querySelector('#temp_min').innerHTML = `${json.tempMin.toFixed(1).toString().replace('.',',')} °C`;
    document.querySelector('#vento').innerHTML = `${json.wind} km/h`;
    document.querySelector('#umidade').innerHTML = `${json.humidity}%`;
}

function showAlert(msg){
    const alert = document.querySelector('#alert');

    const existingMessage = alert.querySelector('#msg');
    if (existingMessage) {
        alert.removeChild(existingMessage);
    }

    const p = document.createElement('p');
    p.innerHTML = msg;
    p.id = 'msg'
    alert.appendChild(p);
}

function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement= document.querySelector("#city");
    let descriptionElement= document.querySelector("#description");
    temperatureElement.innerHTML= math.round(response.data.main.temp);
    cityElement.innerHTML= response.data.name;
    descriptionElement.innerHTML= response.data.weather[0].description;
}

let apiKey = "148fea8d023d30747db11939455acef0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);


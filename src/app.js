
function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours<10){
        hours=`0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days [date.getDay()];
    return `${day} ${hours}:${minutes}`;

}


function displayTemperature(response){

    let temperatureElement=document.querySelector("#temperature");
    let cityElement= document.querySelector("#city");
    let descriptionElement= document.querySelector("#description");
    let huminityElement=document.querySelector("#huminity");
    let windElement=document.querySelector("#wind");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector("#icon");

    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    cityElement.innerHTML= response.data.name;
    descriptionElement.innerHTML= response.data.weather[0].description;
    huminityElement.innerHTML= response.data.main.huminity;
    windElement.innerHTML=response.data.wind.speed;
    dateElement.innerHTML=formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.pnj`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);


}   

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function search(city){
let apiKey = "148fea8d023d30747db11939455acef0";
let city="new york";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

}

search=("new york");

let form= document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);
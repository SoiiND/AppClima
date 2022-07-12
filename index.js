const container = document.getElementById("container")
const searchCity = document.getElementById("searchCity")
const searchInput = document.getElementById("searchInput")
const currentTemp = document.getElementById("currentTemp")
const icon = document.getElementById("icon")
const iconDesc = document.getElementById("iconDesc")
const ciudad = document.getElementById("ciudad")
const min = document.getElementById("min")
const max = document.getElementById("max")

// const city = "cordoba" default.

const displayInfo = (data) => {

    currentTemp.innerHTML = data.main.temp;
    ciudad.innerHTML = data.name;
    icon.src =  `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`
    iconDesc.innerHTML = data.weather[0].description
    min.innerHTML = data.main.temp_min
    max.innerHTML = data.main.temp_max
}


const getCityWeather = async(city) => {
    const APIkey = "56f123c6d21671a1be1588802456a125";   

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${APIkey}`

    const response = await fetch(api)
    const data = await response.json()
    
    displayInfo(data)

}

searchCity.addEventListener("submit", (e) =>{
    e.preventDefault()
    getCityWeather(searchInput.value)
})

window.onload =()=> {
    getCityWeather("cordoba")
}
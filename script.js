document.cookie = "SameSite=Lax"
let weather = {
    "apiKey": "7328379d5f98c20f0ff9103a82e7c873",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid="
            +this.apiKey
        ).then((response)=>response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0]
        const { feels_like, humidity } = data.main
        const { speed } = data.wind
        console.log(name,icon,description,feels_like,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    }
}
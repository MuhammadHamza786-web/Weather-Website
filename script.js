// function weather$web(){
//     let weather_web =document.getElementById("Weather").value
//     console.log(weather_web)
// }
function weather$web() {
    let city = document.getElementById("cityName").value;


    fetch(`https://api.weatherapi.com/v1/current.json?key=8409f198acb14712b31135131260102&q=${city}`).then(function (res) {

        return res.json()

    }).then(function (response) {
        console.log(response);


        document.getElementById("output").innerHTML = `<div class="result">
            <div class="image">
          
          <img src="https:${response.current.condition.icon}" alt="weather icon">
          <h1>
          ${response.current.temp_c}
                <sup>°C</sup>
            </h1>  
            
            <div class="weatherDetails">
                <p class="para1"> 
                ${response.current.temp_f}
                </p>
                
            </div>         
            </div>

        </div>`

    }).catch(error => {
        console.log("Error", error)
    });

}
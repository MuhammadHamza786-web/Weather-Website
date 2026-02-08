
function weather$web() {
    let city = document.getElementById("cityName").value;


    fetch(`https://api.weatherapi.com/v1/current.json?key=8409f198acb14712b31135131260102&q=${city}`).then(function (res) {

        return res.json()

    }).then(function (response) {
        console.log(response);


        document.getElementById("output").innerHTML = `<div class="result">
            <div class="image">
          
          <img src="https:${response.current.condition.icon}" alt="weather icon">
          </div>         
          <br>
          
        
            
        <div class="weatherDetails">
        
          <p>Temperature °C 🌡️:
          ${response.current.temp_c}
          
          <sup>°C</sup>
          </p> 
          <br>
            <p>Temperature °F 🌡️:
            
            ${response.current.temp_f}
            
            <sup>°F</sup>

            </p>
           <br> 
               <h2>
            ${response.location.name}
            <br>
            <span>
            ${response.location.region}/${response.location.country}
             </span>
            </h2>
            <br>
            <p>
            Latitude:
            ${response.location.lat}
            </p>
            <br>
            <p>
            Longitude:
            ${response.location.lon}
            </p>
            </div>
              
        </div>`

    }).catch(error => {
        console.log("Error", error)
    });

}
function getData() {
    const search = document.getElementById('search'); // Get the search input element
    const city = encodeURIComponent(search.value); // Encode the city name
    const apiKey = '0ed32da649b1e496fa2edf538c8d3e44'; // Your API key
    const options = {
        method: 'GET',
        headers: {
            'api-key': apiKey,
            'api-host': 'OpenWeatherApi.com'
        }
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(res => {
            console.log(res); // Log the response to see its structure
            if (res && res.main) {
                // Accessing temperature, wind speed, and humidity from the response
                const tempCelsius = (res.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                const windSpeed = res.wind.speed; // Wind speed in m/s
                const humidity = res.main.humidity; // Humidity in percentage

                // Update the HTML elements with the fetched data
                document.getElementById('temp').innerHTML = `${tempCelsius}<sup>o</sup>`;
                document.getElementById('ws').innerHTML = windSpeed;
                document.getElementById('humdty').innerHTML = humidity;
            } else {
                // Handle the case where the data is not available
                document.getElementById('temp').innerHTML = "N/A";
                document.getElementById('ws').innerHTML = "N/A";
                document.getElementById('humdty').innerHTML = "N/A";
            }
        })
        .catch(err => console.log(err));
}
import React, { useState } from 'react'
import WeatherReport from './WeatherReport'

export default function Form() {

    const apiKEY = "f15964265bfcaa6b1800a771715b5c7f"

    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const [main, setMain] = useState({})
    const [wind, setWind] = useState({})
    const [weather, setWeather] = useState([])

    const searchWeather = () => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKEY}`)
            .then(res => res.json())
            .then((data) => {
                setMain(data.main)
                setWind(data.wind)
                setWeather(data.weather)
                setError(false)
            })
            .catch((error) => {
                setError(true)
                setMessage(error.message)
            })
    }

    return (
        <React.Fragment>
            <div class="row g-3 container mt-4">
                <div class="col-auto">
                    <label for="staticEmail2" class="form-label">Enter City</label>
                    <input type="text" readonly class="form-control" id="staticEmail2" value="City" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="form-label">Enter Country</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Enter Country</label> <br />
                    <button type="submit" class="btn btn-primary mb-3" onClick={searchWeather}>Search</button>
                </div>
            </div>
            {
                weather.length !== 0 ? (
                    <WeatherReport
                error={error}
                message={message}
                temp={main.temp}
                feels_like={main.feels_like}
                humidity={main.humidity}
                speed={wind.speed}
                description={weather[0].description}
            />
                ) : null
            }
            
        </React.Fragment>
    )
}

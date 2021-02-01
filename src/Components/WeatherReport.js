import React from 'react'

export default function WeatherReport({ temp, feels_like, humidity, speed, description, error, message }) {
    return (
        <React.Fragment>
            {
                error ? (
                    <div>
                        {message}
                    </div>
                ) : null
            }
            {
                error !== true ? (
                    <div className="container">
                        <p>Temp : {temp}</p>
                        <p>Feels Like : {feels_like}</p>
                        <p>Humidity : {humidity}</p>
                        <p>Wind Speed : {speed}</p>
                        <p>Description : {description}</p>

                    </div>
                ) : null

            }
        </React.Fragment>
    )
}

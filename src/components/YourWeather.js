import React from 'react'
import "../App.css";

function YourWeather() {
    return (
        <div className="container-fluid">
            <h1>Enter your city's name to get your weather!</h1>
            <form>
                <input className="city-search" type="text"></input>
            </form>
        </div>
    )
}

export default YourWeather;

import React, { Component } from 'react'
import axios from "/axios";
import hidden_api_key from "app";
import { hidden_api_key } from 'a';
const BASE_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid="+{hidden_api_key};

class Forecast extends Component 
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
    

    async getForecast() {
        try {
            const res = await axios.get(BASE_URL + {hidden_api_key})
        }
    }
    
    render() {
        return (
            <div>
                <h1>Hello Forecast!</h1>
            </div>
        )
    }
}

export default Forecast;
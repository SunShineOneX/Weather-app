import React, { Component } from 'react'
import axios from "axios";
const hidden_api_key = "6873977fa93f67c8469b30670cf21868";
const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=4.6948076&lon=-84.4821498&exclude=hourly,minutely,current&appid=${hidden_api_key}`;


class Day7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            day: [],
        }
        
    }
    async getForecast() {
        try {
          const res = await axios.get(apiCall);
          this.setState({ info: res.data });
          this.setState({ day: this.state.info.daily[1].dt})
        } catch {
            console.log("error!!!!");
          }
        }
        componentDidMount() {
            this.getForecast();
          }
      
          getCurrentDay = (num) => {
            let unix_timestamp = num;
            var date = new Date(unix_timestamp * 1000);
            return date.toString().slice(0,10);
          }

          getFahrenheit = () => {
            let kelvin = this.state.info3.temp;
            let fahrenheit = Math.floor((kelvin - 273.15) * 1.8 + 32);
            return fahrenheit;
          };

    render() {
        return (
            <div>
                <h1>{this.getCurrentDay(this.state.day)}</h1>
            </div>
        )
    }
}

export default Day7;
import React, { Component } from 'react'
import axios from "axios";

const hidden_api_key = "ecdcfaface86216d574a68c8d7711d35";
const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.38798&exclude=hourly,minutely,current&appid=${hidden_api_key}`;

class Day3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            info2: [],
            info3: [],
            info4: [],
        }
        
    }
     
    async getForecast() {
        try {
          const res = await axios.get(apiCall);
          this.setState({ info: res.data });
          this.setState({ info2: this.state.info.daily[3]});
          this.setState({ info3: this.state.info2.temp})
          this.setState({ info4: this.state.info2.weather[0]})


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
  
      getFahrenheitMax = () => {
        let kelvin = this.state.info3.max;
        let fahrenheit = Math.floor((kelvin - 273.15) * 1.8 + 32);
        return fahrenheit;
      };
    
      getFahrenheitMin = () => {
        let kelvin = this.state.info3.min;
        let fahrenheit = Math.floor((kelvin - 273.15) * 1.8 + 32);
        return fahrenheit;
      };
    
      createIconLink = (iconId) => {
        return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
      };
    
    render() {
        return (
            <div>
            <h1>Atlanta</h1>
            <h2>{this.getCurrentDay(this.state.info2.dt)}</h2>
            <h3>High of {this.getFahrenheitMax()}</h3>
            <h3>Low of {this.getFahrenheitMin()}</h3>
            <img src={this.createIconLink(this.state.info4.icon)} />
        </div>
        )
    }
}

// https://api.openweathermap.org/data/2.5/weather?zip=30540,us&units=imperial&exclude=hourly,minutely,current&appid=ecdcfaface86216d574a68c8d7711d35

export default Day3;
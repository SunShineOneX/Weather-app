import React, { Component } from 'react'
import axios from "axios";

const hidden_api_key = "ecdcfaface86216d574a68c8d7711d35";
const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.38798&exclude=hourly,minutely,current&appid=${hidden_api_key}`;


class Today extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            weather: [],
            weather1: [],
            Today: [],
            temp: [],
        }
        
    }
     
    async getForecast() {
        try {
          const res = await axios.get(apiCall);
          this.setState({ info: res.data });
          this.setState({ weather: this.state.info.daily[0].weather});
          this.setState({ weather1: this.state.weather[0].icon});;
          this.setState({ Today: this.state.info.daily[0].dt});
          this.setState({ temp: this.state.info.daily[0].temp});
          this.setState({ img: this.state.info.daily[0].temp});
          

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
        let kelvin = this.state.temp.max;
        let fahrenheit = Math.floor((kelvin - 273.15) * 1.8 + 32);
        return fahrenheit;
      };
    
      getFahrenheitMin = () => {
        let kelvin = this.state.temp.min;
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
            <h2>{this.getCurrentDay(this.state.Today)}</h2>
            <h3>High of {this.getFahrenheitMax()}</h3>
            <h3>Low of {this.getFahrenheitMin()}</h3>
            <img src={this.createIconLink(this.state.weather1)} />
        </div>
        )
    }
}

export default Today;
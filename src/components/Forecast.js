import React, { Component } from "react";
import axios from "axios";

const api_key = "ecdcfaface86216d574a68c8d7711d35";
const hidden_api_key = "6873977fa93f67c8469b30670cf21868";
const city = "ellijay";
const country = "us";
let date = new Date().toString().slice(0, 10);
let part = "current,minutely,hourly";
const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=4.6948076&lon=-84.4821498&exclude=hourly,minutely,current&appid=${hidden_api_key}`;
const iconRender = `http://openweathermap.org/img/wn/10d@2x.png`;

// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
// exclude=hourly,minutely,current&appid=6873977fa93f67c8469b30670cf21868

// https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&
// exclude=hourly,minutely,daily&appid=ecdcfaface86216d574a68c8d7711d35

// 15957 00000
// 15957 86400
//  MAIN LINK: https://api.openweathermap.org/data/2.5/onecall?lat=4.6948076&lon=-84.4821498&exclude=hourly,minutely,current&appid=6873977fa93f67c8469b30670cf21868
// api.openweathermap.org/data/2.5/weather?q=ellijay,us&appid=6873977fa93f67c8469b30670cf21868

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      weather: [],
      info3: [],
      icon: [],
    };
  }
  async getForecast() {
    try {
      const res = await axios.get(apiCall);
      console.log(res.data);
      console.log(res.data.weather);
      console.log(res.data.main.temp);
      // this.setState({info: res.data.weather});
      // this.setState({weather: this.state.info[0].main});
      this.setState({ info: res.data });
      this.setState({ weather: this.state.info.weather[0] });
      this.setState({ info3: this.state.info.main });
      this.setState({ icon: this.state.weather.icon });
      // console.log(this.state.weather);
      console.log(res.data.weather);
      // console.log(res.data.main.temp);
    } catch {
      console.log("error!!!!");
    }
  }
  // console.log(info);
  // console.log(weather);

  // changePropertyName(property) {
  //     this.state.propertyName = property
  // }

  componentDidMount() {
    this.getForecast();
  }

  createIconLink = (iconId) => {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  };

  getFahrenheit = () => {
    let kelvin = this.state.info3.temp;
    let fahrenheit = Math.floor((kelvin - 273.15) * 1.8 + 32);
    return fahrenheit;
  };

  getCurrentDay = (num) => {
    let unix_timestamp = num;
    var date = new Date(unix_timestamp * 1000);
    return date.toString().slice(0,10);
  }

  render() {
    console.log(this.state.weather);

    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div id="card" class="card">
              <h1>Today</h1>
              <h2>{date}</h2>
              {/* {this.changePropertyName("weather")} */}
              {/* <h2>{this.state.info.name}</h2> */}
              <h2>{this.state.weather.main}</h2>
              <img src={this.createIconLink(this.state.icon)} />
              <h2></h2>
              <h2>{this.getFahrenheit()}</h2>
            </div>
          </div>
          <div class="col-lg-2">
            <div id="card" class="card">
              <h1>Today</h1>
              <h2>{this.getCurrentDay()}</h2>
              {/* {this.changePropertyName("weather")} */}
              {/* <h2>{this.state.info.name}</h2> */}
              <h2>{this.state.weather.main}</h2>
              <img src={this.createIconLink(this.state.icon)} />
              <h2></h2>
              <h2>{this.getFahrenheit()}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;

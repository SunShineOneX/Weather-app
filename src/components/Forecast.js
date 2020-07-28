import React, { Component } from "react";
import axios from "axios";

const hidden_api_key = "ecdcfaface86216d574a68c8d7711d35";
const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.38798&units=imperial&exclude=hourly,minutely,current&appid=${hidden_api_key}`;

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            info2: [],
            info3: [],
            info4: [],
            
            day2info: [],
            day2info2: [],
            day2info3: [],
            
            day3info: [],
            day3info2: [],
            day3info3: [],

            day4info: [],
            day4info2: [],
            day4info3: [],

            day5info: [],
            day5info2: [],
            day5info3: [],

            day6info: [],
            day6info2: [],
            day6info3: [],

            day7info: [],
            day7info2: [],
            day7info3: [],
        }
        
    }
     
    async getForecast() {
        try {
          const res = await axios.get(apiCall);
          this.setState({ info: res.data });
          this.setState({ info2: this.state.info.daily[0]});
          this.setState({ info3: this.state.info2.temp});
          this.setState({ info4: this.state.info2.weather[0]});

          this.setState({ day2info: this.state.info.daily[1]});
          this.setState({ day2info2: this.state.day2info.temp})
          this.setState({ day2info3: this.state.day2info.weather[0]})

          this.setState({ day3info: this.state.info.daily[2]});
          this.setState({ day3info2: this.state.day3info.temp})
          this.setState({ day3info3: this.state.day3info.weather[0]})

          this.setState({ day4info: this.state.info.daily[3]});
          this.setState({ day4info2: this.state.day4info.temp})
          this.setState({ day4info3: this.state.day4info.weather[0]})

          this.setState({ day5info: this.state.info.daily[4]});
          this.setState({ day5info2: this.state.day5info.temp})
          this.setState({ day5info3: this.state.day5info.weather[0]})

          this.setState({ day6info: this.state.info.daily[5]});
          this.setState({ day6info2: this.state.day6info.temp})
          this.setState({ day6info3: this.state.day6info.weather[0]})

          this.setState({ day7info: this.state.info.daily[6]});
          this.setState({ day7info2: this.state.day7info.temp})
          this.setState({ day7info3: this.state.day7info.weather[0]})


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
  
      getFahrenheitMax = (str) => {
        let fahrenheit = Math.floor((str - 273.15) * 1.8 + 32);
        return fahrenheit;
      };
    
      getFahrenheitMin = (str) => {
        let fahrenheit = Math.floor((str - 273.15) * 1.8 + 32);
        return fahrenheit;
      };
    
      createIconLink = (iconId) => {
        return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
      };
    
    render() {
        return (
            <div>
              <div className="row">
                <div class="col-lg-1.5">
                  <div id="card" class="card">
                
                <h1>Atlanta</h1>
                <h2>{this.getCurrentDay(this.state.info2.dt)}</h2>
                <h3>High of {Math.floor(this.state.info3.max)}</h3>
                <h3>Low of {Math.floor(this.state.info3.min)}</h3>
                <img src={this.createIconLink(this.state.info4.icon)} />
                </div>
                </div>
                <div class="col-lg-1.5">
                  <div id="card" class="card">
                
                <h1>Atlanta</h1>
                <h2>{this.getCurrentDay(this.state.day2info.dt)}</h2>
                <h3>High of {Math.floor(this.state.day2info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day2info2.min)}</h3>
                <img src={this.createIconLink(this.state.day2info3.icon)} />
                
                </div>
              </div>

              <div class="col-lg-1.5">
                  <div id="card" class="card">
                
                <h1>Atlanta</h1>
                <h2>{this.getCurrentDay(this.state.day3info.dt)}</h2>
                <h3>High of {Math.floor(this.state.day3info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day3info2.min)}</h3>
                <img src={this.createIconLink(this.state.day3info3.icon)} />
                
                </div>
              </div>

              <div class="col-lg-1.5">
                  <div id="card" class="card">
                
                <h1>Atlanta</h1>
                <h2>{this.getCurrentDay(this.state.day4info.dt)}</h2>
                <h3>High of {Math.floor(this.state.day4info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day4info2.min)}</h3>
                <img src={this.createIconLink(this.state.day4info3.icon)} />
                
                </div>
              </div>

              <div class="col-lg-1.5">
                  <div id="card" class="card">
                
                <h1>Atlanta</h1>
                <h2>{this.getCurrentDay(this.state.day5info.dt)}</h2>
                <h3>High of {Math.floor(this.state.day5info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day5info2.min)}</h3>
                <img src={this.createIconLink(this.state.day5info3.icon)} />
                
                </div>
              </div>

              <div class="col-lg-1.5">
                  <div id="card" class="card">
                
                <h1>Atlanta</h1>
                <h2>{this.getCurrentDay(this.state.day6info.dt)}</h2>
                <h3>High of {Math.floor(this.state.day6info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day6info2.min)}</h3>
                <img src={this.createIconLink(this.state.day6info3.icon)} />
                
                </div>
              </div>

              <div class="col-lg-1.5">
                  <div id="card" class="card">
                
                <h1>Atlanta</h1>
                <h2>{this.getCurrentDay(this.state.day7info.dt)}</h2>
                <h3>High of {Math.floor(this.state.day7info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day7info2.min)}</h3>
                <img src={this.createIconLink(this.state.day7info3.icon)} />
                
                </div>
              </div>

              <h1>-Jeffrey Rockenbach https://github.com/SunShineOneX</h1>
            </div>
            </div>

        )
    }
}

export default Forecast;

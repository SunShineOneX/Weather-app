import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import Forecast from './Forecast';
import Today from './Today';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';
import Day5 from './Day5';
import Day6 from './Day6';
import Day7 from './Day7';
import axios from "axios";
const hidden_api_key = "6873977fa93f67c8469b30670cf21868";
const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=4.6948076&lon=-84.4821498&exclude=hourly,minutely,current&appid=${hidden_api_key}`;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            day1: [],
            day2: [],
            day3: [],
            day4: [],
            day5: [],
            day6: [],
            day7: [],
        }     
    }
    
    async getForecast() {
      try {
        const res = await axios.get(apiCall);
        this.setState({ info: res.data });
        this.setState({ day1: this.state.info.daily[0].dt});
        this.setState({ day2: this.state.info.daily[1].dt});
        this.setState({ day3: this.state.info.daily[2].dt});
        this.setState({ day4: this.state.info.daily[3].dt});
        this.setState({ day5: this.state.info.daily[4].dt});
        this.setState({ day6: this.state.info.daily[5].dt});
        this.setState({ day7: this.state.info.daily[6].dt});
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
    
    render() {
        return (
            <Router>
            <div>
                <nav class="navbar navbar-light navbar-expand-lg" id="nav">
  <a class="navbar-brand" href="#"><Link to="/">Forecast</Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#"><Link to="/Today">Today {this.getCurrentDay(this.state.day1)}</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Day2">{this.getCurrentDay(this.state.day2)}</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Day3">{this.getCurrentDay(this.state.day3)}</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Day4">{this.getCurrentDay(this.state.day4)}</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Day5">{this.getCurrentDay(this.state.day5)}</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Day6">{this.getCurrentDay(this.state.day6)}</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Day7">{this.getCurrentDay(this.state.day7)}</Link></a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<Switch>
    <Route exact path="/" component={Forecast} />
    <Route path={`/  ${this.getCurrentDay(this.state.day2)}}`} component={Today} />
    <Route path="/Day2" component={Day2} />
    <Route path="/Day3" component={Day3} />
    <Route path="/Day4" component={Day4} />
    <Route path="/Day5" component={Day5} />
    <Route path="/Day6" component={Day6} />
    <Route path="/Day7" component={Day7} />
</Switch>
            </div>
            </Router>
        )
    }
}

export default Navbar;
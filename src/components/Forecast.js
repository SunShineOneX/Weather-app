import React, { Component } from 'react'
import axios from "axios";

const api_key = "ecdcfaface86216d574a68c8d7711d35";
const hidden_api_key = "6873977fa93f67c8469b30670cf21868";
const city = "ellijay";
const country = "us";
let part = "current,minutely,hourly"
const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${hidden_api_key}`;
const iconRender = `http://openweathermap.org/img/wn/10d@2x.png`;

// https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&
// exclude=hourly,minutely,daily&appid=ecdcfaface86216d574a68c8d7711d35

// api.openweathermap.org/data/2.5/weather?q=ellijay,us&appid=6873977fa93f67c8469b30670cf21868

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            info2: [],
            info3: [],
            icon: [],
        }
    }
    async getForecast() {
        try {
            const res = await axios.get(apiCall)
            console.log(res.data);
            console.log(res.data.weather);
            console.log(res.data.main.temp);
            // this.setState({info: res.data.weather});
            // this.setState({info2: this.state.info[0].main});
            this.setState({info: res.data});
            this.setState({info2: this.state.info.weather[0]});
            this.setState({info3: this.state.info.main});
            this.setState({icon: this.state.info2.icon})
        // console.log(this.state.info2);
        console.log(res.data.weather);
        // console.log(res.data.main.temp);
    
        } catch {
            console.log("error!!!!");
        }
    }
    // console.log(info);
    // console.log(info2);

    // changePropertyName(property) {
    //     this.state.propertyName = property
    // }
 
    componentDidMount() {
        this.getForecast();
    }
    
    createIconLink = (iconId) => {
        return `http://openweathermap.org/img/wn/${iconId}@2x.png`
    }

    render() {
        
        console.log(this.state.info2);
        return (
            <div>
                <h1>Hello Forecast!</h1>
                {/* {this.changePropertyName("weather")} */}
                {/* <h2>{this.state.info.name}</h2> */}
                <h2>{this.state.info2.main}</h2>
                <h2>{this.state.icon}</h2>
                <img src={this.createIconLink(this.state.icon)} />
                <h2>{this.state.info3.temp}</h2>
                
                

                
                {/* <h2>{this.state.info}</h2> */}
                {/* <h2>{this.state.info.weather}</h2> */}
            </div>
        )
    }
}

export default Forecast;
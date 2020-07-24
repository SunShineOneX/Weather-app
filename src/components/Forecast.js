import React, { Component } from 'react'

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
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
import React, { Component } from 'react'

class Friday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
        
    }
    
    render() {
        return (
            <div>
                <h1>Hello Friday!</h1>
            </div>
        )
    }
}

export default Friday;
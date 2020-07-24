import React, { Component } from 'react'

class Saturday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
        
    }
    
    render() {
        return (
            <div>
                <h1>Hello Saturday!</h1>
            </div>
        )
    }
}

export default Saturday;
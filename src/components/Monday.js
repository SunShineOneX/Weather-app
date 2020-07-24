import React, { Component } from 'react'
class Monday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
        
    }
    
    render() {
        return (
            <div>
                <h1>Hello Monday!</h1>
            </div>
        )
    }
}

export default Monday;
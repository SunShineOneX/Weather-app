import React, { Component } from 'react'
class Today extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
        
    }
    
    render() {
        return (
            <div>
                <h1>Hello Today!</h1>
            </div>
        )
    }
}

export default Today;
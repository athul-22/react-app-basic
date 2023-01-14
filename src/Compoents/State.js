
import React , { Component } from "react";

class Alert extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Before Clicking'
        }
    }
    
    changeText(){
        this.setState({
            message : 'After Clicking'
        })
    }

    render(){
        return(
            <div>
                <h3 >{this.state.message}</h3>
                <button onClick={() => this.changeText()}>{this.state.message}</button>
            </div>
        )
    }
}


export default Alert;
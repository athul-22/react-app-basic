import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            username : ''
           
        
        }
    }


    //EVENT HANDLER
    eventHandler = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    //SELECTION VALUE
    eventSelVal = event =>{
        this.setState({
            selVal : event.target.value
        })
    }

    //SUBMIT EVENT
    eventSubmit = () =>{
        alert(`${this.state.username} ${this.state.selval}`)
    }

  render() {
    return (
      <form onSubmit={this.eventSubmit}>
        <div>
         <h3>Form Component</h3>
         <br></br>
         <label>NAME : </label>
         <input type='text' value={this.state.username} onChange={this.eventHandler}/>
        </div>
        <br></br>
        <div>
            <select value={this.state.selval} onChange={this.eventSelVal}>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="germany">GERMANY</option>
                <option value="canada">CANADA</option>
            </select>
            <br></br>
            <button type='submit'>SUBMIT</button>
        </div>
      </form>
    )
  }
}

export default Form
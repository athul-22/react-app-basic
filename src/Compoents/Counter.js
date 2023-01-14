import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    incrementFun(){
        this.setState ({
            count : this.state.count +1
        })
        console.log(this.state.count)
    }

  render() {            
    return (            
      <div>
        <br>
        </br>
        <h1>Counter {this.state.count}</h1>
        <br></br>
        <button onClick={ () => this.incrementFun() }>INCREMENT + </button>
        </div>
    )            
  }
}            

export default Counter            
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Athul"
      }

      //BINDING THIS 

      this.greetName = this.greetName.bind(this)
    }

    // FUNCTION

    greetName(){
        alert(`Welcome ${this.state.name}`)
    }

  render() {
    return (
      <div><ChildComponent/></div>
    )
  }
}

export default ParentComponent
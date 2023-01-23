import React, { Component } from 'react'

 class RefsDemo extends Component {


    // CREATING AUTOFOCUS OF INPUT WITH REFS

    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickEvent = () => {
        alert(this.inputRef.current.value )
    }

  render() {
    return (
      <div>
        <center><input className='input-refs' ref={this.inputRef}></input></center>
        <button onClick={this.clickEvent}>ALERT</button>
      </div>
    )
  }
 }
 
export default RefsDemo
import React from 'react'


function ChildComponent(props) {
  return (
    <div>
        ChildComponent 
        <br>
        </br>
        <button onClick={props.greetHandle}>GREET </button>
    </div>
  )
}

export default ChildComponent
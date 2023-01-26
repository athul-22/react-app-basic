import React , { useState } from "react";

function HookCounter() {

    const [ count , setCount ] = useState(0);


  return (
    <div>
        HookCounter
        <button onClick={ ()=> setCount(count+1) }>INCREMENT {count} </button>
    </div>
  )
}

export default HookCounter
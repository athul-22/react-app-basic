import React from 'react'
import { useState } from 'react'
import HookUseEffect from './HookUseEffect'

function MouseContainer() {
    const [display , setDisplay ] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>TOGGLE</button>
        { display && <HookUseEffect/> }
    </div>
  )
}

export default MouseContainer
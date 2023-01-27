import React , { useState } from 'react'

function HookInput() {

const[name , setName] = useState({firstName : '', lastName: ''})

  return (
    <div>
        <input type="text" value={name.firstName} onChange={}/>

    </div>
  )
}

export default HookInput
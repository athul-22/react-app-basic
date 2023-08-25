import React , { useState } from 'react'

function HookInput() {

  
const[name , setName] = useState({firstName : '', lastName: ''})

  return (
    
    <div>
    
        <input type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value })}/>
        <input type="text" value={name.lastName} onChange={a => setName({...name,lastName : a.target.value})} />
        <h3>YOUR NAME IS : {name.firstName}</h3>
        <h3>LAST NAME IS : {name.lastName}</h3>
    </div>
  )
}

export default HookInput

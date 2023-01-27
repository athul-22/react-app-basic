import React , { useState } from 'react'

function HookInput() {

const[name , setName] = useState({firstName : '', lastName: ''})

  return (
    <div>
        <input type="text" value={name.firstName} onChange={e = ()=> setName({firstName: e.target.value })}/>

    </div>
  )
}

export default HookInput
import React,{ useState } from 'react'

function HookList() {

// CREATNG HOOKS
const [item , setItem] = useState([])

const addItem = () =>{
    setItem([...item,{
        id: item.length,
        value: Math.floor(Math.random()*10)
    }])
}

  return (
    <div>
        <button onClick={addItem}>ADD ITEM</button>
        HookList
        <ul>
            {
                item.map(item => (<li key={item.id}>{item.value}</li>))
            }
        </ul>
    </div>
  )
}

export default HookList
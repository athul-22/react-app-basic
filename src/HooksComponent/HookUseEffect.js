import React, {useState,useEffect} from 'react'

function HookUseEffect() {

const [count,setCount] = useState(0)

useEffect(()=>{
    document.title = `Clicked ${count}`
})

  return (
    <div>
        <button onClick={()=> {setCount(count+1)}}>{count}</button>
    </div>
  )
}

export default HookUseEffect
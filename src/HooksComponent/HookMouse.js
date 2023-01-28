import React,{ useState , useEffect } from 'react'

function HookMouse() {

    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    useEffect(()=>{
        console.log('Mouse Events')
        window.addEventListener('mousemove',logMousePosition)
    })

    const logMousePosition = e =>{
        setX(e.clintX)
        setY(e.clintY)
    }

  return (
    <div>
        X - {x} 
        Y - {y}
    </div>
  )
}

export default HookMouse
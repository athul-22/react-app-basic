import React,{ useState , useEffect } from 'react'

function HookMouse() {

    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse efect')
        setX(e.clintX)
        setY(e.clintY)
    
    }

    useEffect(() => {
        console.log('Mouse Events')
        window.addEventListener('mousemove',logMousePosition)
    },[])
    
  return (
    <div>
        X - {x} 
        Y - {y}
    </div>
  )
}

export default HookMouse
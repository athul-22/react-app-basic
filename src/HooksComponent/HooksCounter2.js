import React from 'react'
import { useState } from 'react';

function HooksCounter2() {
    const intialCount = 0;
    const [count, setCount] = useState(0)
  return (
    <div>
        COUNT {count}
            <br></br>
        <button onClick={() =>setCount(intialCount)}>RESET</button>    
        <button onClick={() =>setCount(count+1)}>INCREMENT++</button>    
        <button onClick={() =>setCount(count-1)}>DECREMENT--</button>    
    </div>
  )
}

export default HooksCounter2
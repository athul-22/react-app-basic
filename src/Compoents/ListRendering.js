import React from 'react'

function ListRendering() {
    const names = ['Athul','Akhil','Ammu','Adhi'];
  return (
    <div>
        <h3>{names[0]}</h3>
        <h3>{names[1]}</h3>
        <h3>{names[2]}</h3>
        <h3>{names[3]}</h3>
    </div>
  )
}

export default ListRendering
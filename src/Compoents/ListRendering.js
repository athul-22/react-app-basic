import React from 'react'

function ListRendering() {
    const names = ['Athul','Akhil','Ammu','Adhi'];
  return (
    <div>
        {
            names.map(names => <h3>{names}</h3>)
        }
    </div>
  )
}

export default ListRendering
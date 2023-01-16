import React from 'react'

export default function MultiArray() {

    const FruitList = [
        {
            id : 1,
            name : 'Apple',
            colour : 'red', 
            stock : 10,
        },
        {
            id : 2,
            name : 'Orange',
            colour : 'range', 
            stock : 3,
        },
        {
            id : 3,
            name : 'Banana',
            colour : 'yellow', 
            stock : 10,
        },
        {
            id : 4,
            name : 'Grapes',
            colour : 'Dark Blue', 
            stock : 10,
        }
    ]

    const  FruitLists = FruitList.map(fruit => (
        <h3>{fruit.name} with {fruit.colour} & stock is {fruit.stock}</h3>
    ))

  return (
    <h3>{FruitLists}</h3>
  )
}

import React from "react";

const Food = (props) => {
    console.log(props)
    return (
    <div><h4>{props.name}</h4>
    {props.children}
    </div>
    )
}

export default Food;
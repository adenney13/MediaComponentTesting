import React from "react"

const View = (props) => {
    console.log(props.height)
    console.log(`this is ${props.height}`)
    
    return (
        <div id = "view">
           {props.windowWidth}
        </div>
    )
}

export default View
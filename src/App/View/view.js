import React from "react"

const View = (props) => {
    console.log(props)
    console.log(`this is ${props.height}`)
    const thisWidth = window.innerWidth
    const thisHeight = window.innerHeight
    return (
        <div id = "view">
           <p>Suckit</p>
        </div>
    )
}

export default View
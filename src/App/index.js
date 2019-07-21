import React, { Component } from "react";
import "./style.css";
import Media from "react-media"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: null
    }
  }

componentDidMount() {
  this.updateWindowWidth();
  window.addEventListener('resize', this.updateWindowWidth)
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowWidth)
}

updateWindowWidth = () => {
  this.setState ({
    width: window.innerWidth
  })
}

// screenWidth = (evt) => {
//   this.setState ({
//     width: Number(evt.target.value)
//   })
// }

  render() {
    console.log(this.state.width)
    return (
    <div className="App">
      <Media query="(width)">
        {matches => 
          matches? (
            <p>This document is {this.state.width}px wide</p>
          ) : (
            <p>JK...this document is more than 750px</p>
          )
          }
      </Media>
    </div>
    )
  }
}

export default App;

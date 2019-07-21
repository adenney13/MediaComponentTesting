import React, { Component } from "react";
import "./style.css";
import Media from "react-media"
import Helmet from "react-helmet"

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

  render() {
    console.log(this.state.width)
    return (
    <div className="App">
      <Media query="(max-width: 750px)">
        {matches => 
          matches? (
            <p>This document is {this.state.width}px wide</p>
          ) : (
            <div>
              <Helmet>
                <style>{'body {background-color: red;}'}</style>
              </Helmet>
              <p>JK...this document is {this.state.width}px wide</p>
            </div>
          )
          }
      </Media>
    </div>
    )
  }
}

export default App;

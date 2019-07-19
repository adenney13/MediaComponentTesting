import React, { Component } from "react";
import "./style.css";
import Media from "react-media"

class App extends Component {
  render() {
    return (
    <div className="App">
      <Media query="(max-width: 750px)">
        {matches => 
          matches? (
            <p>This document is less than 750px</p>
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

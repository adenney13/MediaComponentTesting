import React, { Component } from "react";
import "./style.css";
import Media from "react-media"
import Helmet from "react-helmet"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: null,
      height: null
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
    width: window.innerWidth,
    height: window.innerHeight
  })
}

  render() {
    // console.log(this.state.width)
    // console.log(this.state.height)
    return (
    <div className="App">
    <Media query={{maxWidth: 400, maxHeight: 700}}>
        {matches => 
          matches? (
            <p>Galaxy</p>
          ) : (
            <div>
              <p></p>
            </div>
          )
          }
      </Media>
   {/* <div> */}
   {/* <Media query="(max-width: 750px)">
    {matches =>
      matches? (
        <p>I am Galaxy</p>
      ) : (
        <p>Not</p>)} 
    }
    </Media>  */}
  {/* <Media query= "(max-width: 411px), (max-height: 731px)"  
    render={() => <span>I am Pixel</span>} /> */}
    {/* <Media query={{ minWidth: "(800px)" }} render={() => <span>I am medium</span>}/> */}
    {/* </div> */}
      {/* <Media query="(max-width: 750px)">
        {matches => 
          matches? (
            <p>This document is {this.state.width}px wide and {this.state.height}px tall</p>
          ) : (
            <div>
              <Helmet>
                <style>{'body {background-color: red;}'}</style>
              </Helmet>
              <p>JK...this document is {this.state.width}px wide and {this.state.height}px tall</p>
            </div>
          )
          }
      </Media> */}
    </div>
    )
  }
}

export default App;

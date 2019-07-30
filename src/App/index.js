import React, { Component } from "react";
import "./style.css";
import Media from "react-media"
import Samsung from "../Assets/Samsung_Galaxy_S5.png"
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
      <p>This document is {this.state.width}px wide and {this.state.height}px tall</p>
      <Media query={{maxWidth: 320, maxHeight: 568}} render={()=> <p>iPhone 5</p>}/>
      <Media query={{minWidth: 321, maxWidth: 360, minHeight: 569, maxHeight: 640}} render={()=> <p><img src={Samsung} alt="Galaxy S5"/></p>}/>
      <Media query={{minWidth: 361, maxWidth: 411, minHeight: 641, maxHeight: 731}} render={()=> <p>Pixel 2</p>}/>
      <Media query={{minWidth: 361, maxWidth: 411, minHeight: 732, maxHeight: 823}} render={()=> <p>Pixel 2XL</p>}/>
      <Media query={{minWidth: 361, maxWidth: 375, minHeight: 569, maxHeight: 667}} render={()=> <p>iPhone 6/7/8</p>}/>
      <Media query={{minWidth: 376, maxWidth: 414, minHeight: 666, maxHeight: 736}} render={()=> <p>iPhone 6/7/8 Plus</p>}/>
      <Media query={{minWidth: 361, maxWidth: 375, minHeight: 737, maxHeight: 812}} render={()=> <p>iPhone X</p>}/> 
      {/* <Media query={{minWidth: 361, maxWidth: 411, minHeight: 641, maxHeight: 731}}>
        {matches => 
          matches? (
            <p>Pixel 2</p>
          ) : (
            <div>
              <p></p>
            </div>
          )
          }
      </Media> */}
      
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

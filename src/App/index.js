import React, { Component } from "react";
import "./style.css";
import Media from "react-media"
import Samsung from "../Assets/Samsung_Galaxy_S5.png"
import iPhone5 from "../Assets/iPhone5.png"
import iPhone6 from "../Assets/iPhone6.png"
import Pixel2 from  "../Assets/Pixel2.png"
import Pixel2_XL from "../Assets/Pixel2_XL.png"
import iPhoneX from "../Assets/iPhoneX.png"

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
      <Media query={{maxWidth: 320, maxHeight: 568}} render={()=> <p><img src={iPhone5} alt="iPhone5"/></p>}/>
      <Media query={{minWidth: 321, maxWidth: 360, minHeight: 569, maxHeight: 640}} render={()=> <p><img src={Samsung} alt="Galaxy S5"/>Galaxy S5</p>}/>
      <Media query={{minWidth: 361, maxWidth: 411, minHeight: 641, maxHeight: 731}} render={()=> <p><img src={Pixel2} alt="Pixel 2"/>Pixel 2</p>}/>
      <Media query={{minWidth: 361, maxWidth: 411, minHeight: 732, maxHeight: 823}} render={()=> <p><img src={Pixel2_XL} alt="Pixel 2 XL"/>Pixel 2 XL</p>}/>
      <Media query={{minWidth: 361, maxWidth: 375, minHeight: 569, maxHeight: 667}} render={()=> <p><img src={iPhone6} alt="iPhone6"/>iPhone 6/7/8</p>}/>
      <Media query={{minWidth: 376, maxWidth: 414, minHeight: 666, maxHeight: 736}} render={()=> <p><img src={iPhone6} alt="iPhone6 Plus"/>iPhone 6/7/8 Plus</p>}/>
      <Media query={{minWidth: 361, maxWidth: 375, minHeight: 737, maxHeight: 812}} render={()=> <p><img src={iPhoneX} alt="iPhone X"/>iPhone X</p>}/> 
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

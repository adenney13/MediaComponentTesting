import React, { Component } from "react";
import "./style.css";
import Media from "react-media"
import Samsung from "../Assets/Samsung_Galaxy_S5.png"
import iPhone5 from "../Assets/iPhone5.png"
import iPhone6 from "../Assets/iPhone6.png"
import Pixel2 from  "../Assets/Pixel2.png"
import Pixel2_XL from "../Assets/Pixel2_XL.png"
import iPhoneX from "../Assets/iPhoneX.png"
import View from './View/view.js'

import Helmet from "react-helmet"
// const heightOutput = document.getElementById('view')
// const widthOutput = document.getElementById('view')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: null,
      height: null
      
      
    }
    // this.updateWindowWidth =this.updateWindowWidth.bind(this)
  }

 

componentDidMount() {
  const height = this.divElement.clientHeight
  const width = this.divElement.clientWidth
  this.setState({ height, width })
// this.getWindowSize()
  
}

// getWindowSize = () => {
//   this.setState({
//       // width: widthOutput,
//       height: heightOutput.offsetHeight
//     })
// }
// componentWillUnmount() {
//   window.removeEventListener('resize', this.updateWindowWidth)
// }

// updateWindowWidth () {
//   window.addEventListener('onresize', this.updateWindowWidth)
//   this.setState ({
//     width: heightOutput.innerWidth,
//     height: heightOutput.innerWidth
//   })
// }




  render() {
    // console.log(this.state.width)
    // console.log(this.state.height)
 
    

   console.log(this.state)
   console.log(this.reportWindowSize)
    return (
    <div className="App">
    <p>This document is {this.state.width}px wide and {this.state.height}px tall</p>
    
      <div 
        id="view"
        ref={ (divElement) => this.divElement = divElement}>

      </div>
      {/* <p>iPhone 5: 320px wide & 568px tall</p>
      <p>For Galaxy S5: 360px wide & 640px tall</p>
      <p>For Pixel 2: 411px wide & 731px tall</p>
      <p>For Pixel 2 XL: 411px wide & 823px tall</p>
      <p>For iPhone 6/7/8: 375px wide & 667px tall</p>
      <p>For iPhone 6/7/8 Plus: 414px wide & 736px tall</p>
      <p>For iPhone X: 375px wide & 812px tall</p> */}
        
        {/* <Media query={{maxWidth: 320, maxHeight: 568}} render={()=> <p><img src={iPhone5} alt="iPhone5"/></p>}/>
        <Media query={{minWidth: 321, maxWidth: 360, minHeight: 569, maxHeight: 640}} render={()=> <p><img src={Samsung} alt="Galaxy S5"/>Galaxy S5</p>}/>
        <Media query={{minWidth: 361, maxWidth: 411, minHeight: 641, maxHeight: 731}} render={()=> <p><img src={Pixel2} alt="Pixel 2"/>Pixel 2</p>}/>
        <Media query={{minWidth: 361, maxWidth: 411, minHeight: 732, maxHeight: 823}} render={()=> <p><img src={Pixel2_XL} alt="Pixel 2 XL"/>Pixel 2 XL</p>}/>
        <Media query={{minWidth: 361, maxWidth: 375, minHeight: 569, maxHeight: 667}} render={()=> <p><img src={iPhone6} alt="iPhone6"/>iPhone 6/7/8</p>}/>
        <Media query={{minWidth: 376, maxWidth: 414, minHeight: 666, maxHeight: 736}} render={()=> <p><img src={iPhone6} alt="iPhone6 Plus"/>iPhone 6/7/8 Plus</p>}/>
        <Media query={{minWidth: 361, maxWidth: 375, minHeight: 737, maxHeight: 812}} render={()=> <p><img src={iPhoneX} alt="iPhone X"/>iPhone X</p>}/>  */}
    
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

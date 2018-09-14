import React, { Component } from 'react'
import { TwitterPicker  } from 'react-color'; 

export default class postColor extends Component {
    state = {
        background: '00D084',
        displayColorPicker: false
      };
    
      handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
      };
    
    
      handleChangeComplete = (color) => {
        this.setState({ background: color.rgb });
        
        this.props.handleColorFun1(this.state.background);
        console.log(this.state.background);
      };
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
  
  
    render() {
    const popover = {
        position: 'absolute',
        zIndex: '2',
      }
      const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }
      
    return (
      <div>
      <button className="btn btn-sm" onClick={ this.handleClick }>Pick Color</button>
      { 
        this.state.displayColorPicker ? (

          <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <TwitterPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }/>
          </div> 

        ) : null

      }
 
      </div>
    )
  }
}

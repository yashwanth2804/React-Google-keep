import React, { Component } from 'react'
import PostColor from './PostColor';

export default class PostTitle extends Component {
 
  render() {
    return (
     
      <div className="row">
        <div className="input-field col s4">
          <input onChange={this.props.handleFun} value={this.props.titleIS} id="titleis" type="text" className="validate"/>
          <label htmlFor="titleis">Title</label>
        </div>
        <div className="input-field col s4">
          <input onChange={this.props.handleFun} id="contentis" type="text" value={this.props.contentIS} className="validate"/>
          <label htmlFor="contentis">Content</label>
        </div>
        <div className="input-field col s2">
        <PostColor handleColorFun1={this.props.handleColorFun} />
        </div>
       
        <button onClick={this.props.handleSubFun} className="input-field btn s2"  name="action">
         <i className="material-icons right">send</i>
        </button>
      </div>
       
    );

      
     

  }
}

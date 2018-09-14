import React, { Component } from 'react'

import PostTitle from './PostTitle';

export default class PostCard extends Component {

     state = {
       id:'',
       titleis :'',
       contentis :'',
       coloris:''
     }

    

    render() {
    return (
      <div>
        <PostTitle  titleIS={this.state.titleis}  contentIS={this.state.contentis} handleFun={this.handleonChange} handleSubFun={this.handleonSubmit} handleColorFun={this.handleColor}/> 
        <div className="divider"></div>
      </div>
    )
  }

  handleonChange = (e) => {
     
    let k = e.target.id;
    let v =e.target.value;
     
    this.setState({
      [k]:v
    });

     
  }

 //get color from child
 handleColor = (e) =>{
  console.log("the changed  color is "+e);
  this.setState({
    coloris:e
  });
  }

  handleonSubmit = (e) =>{

    console.log(this.state.titleis+"  "+this.state.contentis+" "+this.state.coloris);
    this.props.addPostFun(this.state); 
    this.setState({
      titleis:'',
      contentis:''

    });

  }
}

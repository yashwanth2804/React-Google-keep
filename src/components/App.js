import React, { Component } from 'react';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import PostCard from './PostCard';
import PostList from './PostLists';
const uuidv4 = require('uuid/v4');

class App extends Component {
  
  state = {
    notes : []
  }
  
  render() {
    
  
    return (
      <div className="container">
       
      <PostCard postState = {this.state.notes} addPostFun= {this.handlePostAdd} />
        <PostList PostlstProp={this.state.notes} handlePOstDelFun={this.handlePOstDel}/>

      </div>
      
    );
  }

  handlePostAdd = (e) =>{
   // console.log(e);
    e.id=uuidv4().toString();
    let newPOst = [ ...this.state.notes,e];
    console.log("*******************");
    console.log(newPOst);

    this.setState({
      notes:newPOst
    });
      
  }

  handlePOstDel = (e) =>{
    console.log("*******dele************");
    console.log(e);
    const notes = this.state.notes.filter( post =>{

      return e !== post.id;

    } );

    this.setState({
      notes
    });


  }

}

export default App;

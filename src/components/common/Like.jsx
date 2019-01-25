import React, { Component } from 'react';

class Like extends Component {

  heartClass = (likeState) => {
    if(!likeState) return "far fa-heart";
    return "fas fa-heart";
  }

  render() {
    let likeState = this.props.liked;
 
   
    return (
      <i 
        className={this.heartClass(likeState)} 
        style={{cursor: 'pointer'}}
        onClick={this.props.onClick}>
      </i>
    )
  }
}

export default Like;
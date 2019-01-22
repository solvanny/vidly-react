import React, { Component } from 'react'

class Like extends Component {

  handleClick = (state) => {
    let { movie } = this.props;
    if(!state) {
      movie.liked = true;
      return  this.props.setState({ movie });
    }
    movie.liked = false;
    return  this.props.setState({ movie });
  }

  heartClass = (state) => {
    if(!state) return "far fa-heart";
    return "fas fa-heart";
  }

  render() {
    let state = this.props.movie.liked;
    return (
      <i 
        className={this.heartClass(state)} 
        style={{cursor: 'pointer'}}
        onClick={() => this.handleClick(state)}>
      </i>
    )
  }
}

export default Like;
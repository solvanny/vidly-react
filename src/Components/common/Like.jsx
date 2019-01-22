import React, { Component } from 'react';

class Like extends Component {

  handleClick = (likState) => {
    // let  movies  = this.props.movies;
    // const index = movies.indexOf(movie);
    // movies[index] = {...movies[index]};
    // movies[index].liked = !movies[index].liked;
    // this.setState({ movies });

    let { movie } = this.props;
    if(!likState) {
      movie.liked = true;
      return  this.props.setState({ movie });
    }
    movie.liked = false;
    return  this.props.setState({ movie });
  }

  heartClass = (likState) => {
    if(!likState) return "far fa-heart";
    return "fas fa-heart";
  }

  render() {
    let likState = this.props.movie.liked;
    return (
      <i 
        className={this.heartClass(likState)} 
        style={{cursor: 'pointer'}}
        onClick={() => this.handleClick(likState)}>
      </i>
    )
  }
}

export default Like;
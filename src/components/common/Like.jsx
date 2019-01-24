import React, { Component } from 'react';

class Like extends Component {

  handleClick = (likeState) => {
    // let  movies  = this.props.movies;
    // const index = movies.indexOf(movie);
    // movies[index] = {...movies[index]};
    // movies[index].liked = !movies[index].liked;
    // this.setState({ movies });

    let { movie } = this.props;
    if(!likeState) {
      movie.liked = true;
      return  this.props.setState({ movie });
    }
    movie.liked = false;
    return  this.props.setState({ movie });
  }

  heartClass = (likeState) => {
    if(!likeState) return "far fa-heart";
    return "fas fa-heart";
  }

  render() {
    let likeState = this.props.movie.liked;
    return (
      <i 
        className={this.heartClass(likeState)} 
        style={{cursor: 'pointer'}}
        onClick={() => this.handleClick(likeState)}>
      </i>
    )
  }
}

export default Like;
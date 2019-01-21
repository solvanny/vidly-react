import React, { Component } from 'react';
import Movie from '../Components/Movie';
import { getMovies } from '../services/fakeMovieService';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    let movies = getMovies();
    this.setState({ movies })
  }

  handleRemove = (id) => {
    let movies = this.state.movies.filter( movie => movie._id !== id )
    this.setState({ movies })
  }

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        <p >
          { 
            movies.length === 0 ? 'There are no movies in the Data Base': 
            `Showing ${movies.length} movies in the database`
          }
        </p>
         <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return(
                <Movie 
                  key={movie._id} 
                  movie={movie}
                  onRemove={this.handleRemove}
                />
              )})}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

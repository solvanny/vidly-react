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
    let newMovies = getMovies();
    this.setState({
      movies: newMovies
    })
  }

  handleRemove = (id) => {
    let { movies } = this.state;
    let newMovies = movies.filter( movie => movie._id !== id )
    this.setState({
      movies: newMovies
    })
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

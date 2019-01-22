import React, { Component } from 'react';
import Movie from '../Components/Movie';
import { getMovies } from '../services/fakeMovieService';
import Pagination from '../Components/common/Pagination';
import { paginate } from '../utils/paginate';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pageSize: 6,
      currentPage: 1
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
    const { movies,  currentPage, pageSize } = this.state;
    const moviesPerPage = paginate(movies, currentPage, pageSize);
    
    return (
      <React.Fragment>
        <p >
          { 
            movies.length === 0 ? 'There are no movies in the Data Base': 
            `Showing ${movies.length} movies in the database`
          }
        </p>
         <table className="table">
          <thead className=" table-dark bg-primary">
            <tr>
              <th scope="col ">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {moviesPerPage.map((movie) => {
              return(
                <Movie 
                  key={movie._id} 
                  movie={movie}
                  onRemove={this.handleRemove}
                  liked={movie.liked}
                  setState={this.setState.bind(this)}
                  movies={this.state.movies}
                />
              )})}
          </tbody>
        </table>
        <Pagination itemCount={movies.length} {...this.state} setState={this.setState.bind(this)}/>
      </React.Fragment>
    )
  }
}

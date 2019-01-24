import React, { Component } from 'react';
import Movie from './common/Movie';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from '../components//common/Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from '../components/common/ListGroup';


class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      pageSize: 9,
      currentPage: 1
    };
  }

  componentDidMount() {

    let genres = [{name: 'All Genres'}, ...getGenres()]

    this.setState({ movies: getMovies(), genres })
  }

  handleRemove = (id) => {
    let movies = this.state.movies.filter( movie => movie._id !== id )
    this.setState({ movies })
  }

  handlePageChange = (page) => {
    this.setState({currentPage: page})
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }


  render() {
    const { movies,  currentPage, pageSize, selectedGenre } = this.state;

    const filtered = selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;

    const moviesPerPage = paginate(filtered, currentPage, pageSize);
    

    return (
      <div className="row"> 
        <div className="col-3">
          <ListGroup 
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>

        <div className="col">
        <p >
          { 
            moviesPerPage.length  === 0 ? 'There are no movies in the Data Base': 
            `Showing ${filtered.length } movies per page`
          }
        </p>
        <table className="table">
          <thead className=" table-dark bg-primary">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
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
        <Pagination 
          itemCount={filtered.length} 
          {...this.state} 
          onPageChange={this.handlePageChange}/>
        </div>
         
      </div>
    )
  }
}


export default Movies;
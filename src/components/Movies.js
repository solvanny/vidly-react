import React, { Component } from 'react';
import MoviesTable from './MoviesTable';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from '../components//common/Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from '../components/common/ListGroup';
import _ from 'lodash';


class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      pageSize: 9,
      currentPage: 1,
      sortColumn: { path: "title", order: "asc"}
    };
  }

  componentDidMount() {
    let genres = [{_id: "", name: 'All Genres'}, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }

  handleRemove = id => {
    let movies = this.state.movies.filter( movie => movie._id !== id )
    this.setState({ movies })
  }

  handlePageChange = page => {
    this.setState({currentPage: page})
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }

  handleOnSort = sortColumn => {
   
    this.setState({ sortColumn, ...sortColumn })
  }

  render() {
    const {
      movies,
      genres,  
      currentPage, 
      pageSize, 
      selectedGenre, 
      sortColumn 
    } = this.state;

    const filtered = selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const moviesPerPage = paginate(sorted, currentPage, pageSize);
    

    return (
      <div className="row"> 
        <div className="col-3">
          <ListGroup 
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>

        <div className="col">
        <p >
          { 
            moviesPerPage.length  === 0 ? 'There are no movies in database': 
            `Showing ${filtered.length } movies in database`
          }
        </p>
        <MoviesTable 
          allMovies={moviesPerPage}
          sortColumn={sortColumn}
          handleRemove={this.handleRemove}
          setState={this.setState}
          movies={movies}
          onSort={this.handleOnSort}
        />
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
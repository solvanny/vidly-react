import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviesTable from './MoviesTable';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from '../components//common/Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from '../components/common/ListGroup';
import _ from 'lodash';


class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };


  componentDidMount() {
    let genres = [{_id: "", name: 'All Genres'}, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }

  handleDelete = item => {
    let movies = this.state.movies.filter( movie => movie._id !== item._id )
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

  handleLike = (movie) => {
    let  movies  = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  getPageData = () => {
    const {
      movies,  
      currentPage, 
      pageSize, 
      selectedGenre, 
      sortColumn 
    } = this.state;

    const filtered = 
      selectedGenre && selectedGenre._id 
        ? movies.filter(m => m.genre._id === selectedGenre._id) 
        : movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const moviesPerPage = paginate(sorted, currentPage, pageSize);

    return { filtered, moviesPerPage }
  }


  render() {
    const {
      movies,
      genres,
      selectedGenre, 
      sortColumn 
    } = this.state;

    const { filtered, moviesPerPage } = this.getPageData();

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
          <Link 
            to="/movies/new" 
            className="btn btn-primary btn-lg active mb-2" 
          >
            New Movie
          </Link>
          <p >
            { 
              moviesPerPage.length  === 0 ? 'There are no movies in database': 
              `Showing ${filtered.length } movies in database`
            }
          </p>
          <MoviesTable 
            allMovies={moviesPerPage}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            movies={movies}
            onLike={this.handleLike}
            onSort={this.handleOnSort}
          />
          <Pagination 
            itemCount={filtered.length} 
            {...this.state} 
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
}


export default Movies;
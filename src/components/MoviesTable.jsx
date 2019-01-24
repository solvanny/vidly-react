import React, { Component }  from 'react';
import Movie from './common/Movie';


class MoviesTable extends Component {

  raiseSort = path => {
    let sortColumn = {...this.props.sortColumn};
    console.log(sortColumn)
    if(sortColumn.path === path) 
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort({ sortColumn })
  }

  render() {
    const { movies, setState, handleRemove, allMovies } = this.props;
    return (
      <table className="table">
        <thead className=" table-dark bg-primary">
          <tr>
            <th onClick={() => this.raiseSort('title')}>Title</th>
            <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
            <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
            <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
            
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {allMovies.map((movie) => {
            return(
              <Movie 
                key={movie._id} 
                movie={movie}
                onRemove={handleRemove}
                liked={movie.liked}
                setState={setState}
                movies={movies}
              />
            )})}
        </tbody>
      </table>
    )
  }
}


export default MoviesTable;


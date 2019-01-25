import React, { Component }  from 'react';
import Like from './common/Like';
import Table from './common/Table';



class MoviesTable extends Component {

  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    { key: "like", 
      content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />},
    { key: "delite", 
      content: movie => (
        <button 
          type="button" 
          className="btn btn-danger btm-small" 
          onClick={() => this.props.onDelete(movie)}> Delete
        </button>
      )
    }
  ];

  render() {
  
    const { allMovies, sortColumn, onSort } = this.props;
    
    return (
      <Table 
        columns={this.columns}
        data={allMovies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    )
  }
}


export default MoviesTable;


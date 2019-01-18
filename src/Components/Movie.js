import React, { Component } from 'react';

class Movie extends Component {
 
  render() {
    let {_id, title, genre, numberInStock, dailyRentalRate} = this.props.movie;
    return (
      <tr>
        <th scope="row">{title}</th>
        <td>{genre.name}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <button 
            type="button" 
            className="btn btn-danger btm-small" 
            onClick={() => this.props.onRemove(_id)}> Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default Movie;
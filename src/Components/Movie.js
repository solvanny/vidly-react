import React, { Component } from 'react';

class Movie extends Component {
  constructor() {
    super();
    this.state = { cliked: false }
  }
  
  handleClick = (state) => {
    if(!state) return  this.setState({ cliked: true });
    this.setState({cliked: false});
  }

  heartClass = (state) => {
    if(!state) return "fas fa-heart";
    return "far fa-heart";
  }


  render() {
    let {_id, title, genre, numberInStock, dailyRentalRate} = this.props.movie;
    let state = this.state.cliked;
    return (
      <tr>
        <th scope="row">{title}</th>
        <td>{genre.name}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <i className={this.heartClass(state)} 
            onClick={() => this.handleClick(state)}>
          </i>
        </td>
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
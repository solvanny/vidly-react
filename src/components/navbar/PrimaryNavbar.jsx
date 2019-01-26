import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class PrimaryNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">       
        <NavLink className="navbar-brand" to="/">
          Vidly
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">    
              <NavLink className="nav-item nav-link" to="/movies" >Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/customers" >Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/rentals" >Rentals</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default PrimaryNavbar;
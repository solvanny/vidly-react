import React from 'react';
import { getMovie } from '../services/fakeMovieService';

const MovieForm = ({match, history}) => {
  const movie = getMovie(match.params.id);
  return (
    <React.Fragment>
      <h1> {movie.title}</h1>
      <ul>
        <li>Genre: {movie.genre.name}</li>
        <li>In Stock: {movie.numberInStock}</li>
        <li>Rental Rate: {movie.dailyRentalRate}</li>
      </ul>
      <button 
        type="button" 
        className="btn btn-outline-primary" 
        onClick={() => history.push('/movies')}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
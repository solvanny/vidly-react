import React from 'react';

const MovieForm = ({match, history}) => {
  return (
    <React.Fragment>
      <h1> Movie id: {match.params.id}</h1>
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
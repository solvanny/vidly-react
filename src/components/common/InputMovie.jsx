import React from 'react';
import { genres } from '../../services/fakeGenreService';

const  InputMovie = props => {
  const { name, label, error, ...rest} = props;
  return(
    <div className="form-group">
      <label htmlFor={name} > {label} </label>
      {name !== 'genre' ?
        <input 
          {...rest}
          id={name}
          name={name}
          className="form-control" 
        /> :
        <select 
          id={name}
          name={name}
          className="form-control" 
          {...rest}
          value={rest.value.name}
        >
          {genres.map(genre => 
          <option key={genre._id}> 
            {genre.name} 
          </option>)}
        </select>
      }  
       {error && <div className="alert alert-danger" >{error}</div>}
    </div>
  )
};

export default InputMovie;
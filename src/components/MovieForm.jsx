import React from 'react';
import Form from './common/Form';
import Joi from 'joi-browser';
import { getMovie } from '../services/fakeMovieService';



class MovieForm extends Form {

  state = {
    movie: {
      title: "", 
      genre: {
        _id: "",
        name: ""
      }, 
      numberInStock: 0,
      dailyRentalRate: 0
    },
    errors: {} 
  }

  
  
  schema = {
    title: Joi.string().required().label('Title'),
    genre: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
    rate: Joi.number().required().min(0).max(10).label('Rate')
  };

  doSubmit = () => {
    //Call the server
  
    console.log('Submited')
  }

  componentDidMount = () => {
    let movie = getMovie(this.props.match.params.id)
    if(!movie) return;
  
    this.setState({ movie })
  } 
    
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        {this.renderMovieInput('title', 'Title')}
        {this.renderMovieInput('genre', 'Genre')}
        {this.renderMovieInput('numberInStock', 'Number In Stock')}
        {this.renderMovieInput('dailyRentalRate', 'Rate')}
        {this.renderButton('Save')}
      </form>
    )
  }
}
// } ({match, history}) => {
//   const movie = getMovie(match.params.id);
//   return (
//     <React.Fragment>
//       <h1> {movie.title}</h1>
//       <ul>
//         <li>Genre: {movie.genre.name}</li>
//         <li>In Stock: {movie.numberInStock}</li>
//         <li>Rental Rate: {movie.dailyRentalRate}</li>
//       </ul>
//       <button 
//         type="button" 
//         className="btn btn-outline-primary" 
//         onClick={() => history.push('/movies')}
//       >
//         Save
//       </button>
//     </React.Fragment>
//   );
// };

export default MovieForm;
import React, { Component } from 'react';
import Joi  from 'joi-browser';
import Input from './Input';
import InputMovie from './InputMovie';


export default class Form extends Component {
  state = {
    data: {usename: "", password: ""},
    movie:  {
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

  validateProperty = ({name, value}) => {
    let obj = { [name]: value };
    let schema = { [name]: this.schema[name] };
    let { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }

  validate = () => {
    let {data} = this.state;
    let options = { abortEarly: false }
    let { error } = Joi.validate(data, this.schema, options);
    
    if (!error) return null;

    let errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }
  
  handleSubmit = e => {
    e.preventDefault();

    let errors = this.validate();
    this.setState({ errors: errors || {}});
    if(errors) return;

    this.doSubmit();
  }

  handleChange = ({currentTarget: input}) => {

    let errors = {...this.state.errors};
    let errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    let data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({ data, errors })
  }

  handleMovieChange = ({currentTarget: input}) => {
    // let errors = {...this.state.errors};
    // let errorMessage = this.validateProperty(input);
    // console.log(errorMessage)
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];
    
    let movie = {...this.state.movie}
    movie[input.name] = input.value
    this.setState({ movie })
  }

 
  renderButton(label){
   return (
    <button 
      disabled={this.validate()}
      className="btn btn-primary">{label}
    </button>
   )}

  renderInput(name, label, type = 'text',) {
    let { data, errors } = this.state;
    return (
      <Input 
        onChange={this.handleChange} 
        name={name}
        type={type}
        value={data[name]}
        label={label}
        error={errors[name]}
      />
    )
  }

  renderMovieInput(name, label, type = 'text') {
    let {movie} = this.state;
  
    return (
    <InputMovie
      
      onChange={this.handleMovieChange} 
      type={type}
      name={name}
      label={label}
      value={movie[name]}
    />
    )
  }
}

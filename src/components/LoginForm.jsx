import React, { Component } from 'react';
import Input from './common/Input';

class LoginForm extends Component {
  
  state = {
    account: {
      username: '',
      password: ''
    },
    errors: {}
  }

  validateProperty = ({name, value}) => {
    if(name === 'username') {
      if (value.trim() === "") return "Username is required."
      //....
    }
    if(name === 'password') {
      if (value.trim() === "") return "Password is required is required."
      //....
    }
  }

  validate = () => {
    let errors = {};

    let {account} = this.state;
    if(account.username.trim() === '') 
      errors.username = "Username is required."
    if(account.password.trim() === '') 
      errors.password = "Password is required."

    return Object.keys(errors).length === 0 ? null : errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {}});
    if(errors) return;

    //coll server
  }

  handleChange = ({currentTarget: input}) => {
    let errors = {...this.state.errors};
    let errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    let account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account, errors })
  }

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input 
            onChange={this.handleChange} 
            name="username"
            value={account.username}
            label="Username"
            error={errors.username}
          />
          <Input 
            onChange={this.handleChange} 
            name="password"
            value={account.password}
            label="Password"
            error={errors.password}
          />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
    )
  }
}

export default LoginForm;
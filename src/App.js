import React, { Component } from 'react';
import Movies from './components/Movies';
import PrimaryNavbar from './components/navbar/PrimaryNavbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Rentals from './components/Rentals';
import Customers from './components/Customers';
import MovieForm from './components/MovieForm';
import PageNotFound from './components/PageNotFound';
import LoginForm from './components/LoginForm';
import './App.css';
import RegisterForm from './components/RegisterForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      pageSize: 9,
      currentPage: 1,
      sortColumn: { path: "title", order: "asc"}
    };
  }


  render() {
    return (
      <React.Fragment>
        <PrimaryNavbar />
        <main role="main" className="container">   
          <Switch>
            <Route exact  path="/register" component={RegisterForm} />
            <Route exact  path="/login" component={LoginForm} />
            <Route exact  path="/movies" render={(props) => <Movies {...props} setState={this.setState} /> } />
            
            <Route exact  path="/movies/:id" render={(props) => <MovieForm  {...props} /> } /> 
            <Route exact  path="/movies/new" render={() => <MovieForm /> } />
            <Route exact path="/customers" component={Customers} /> 
            <Route exact path="/not-found"  component={PageNotFound} /> 
            <Route exact path="/rentals"  component={Rentals} /> 
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

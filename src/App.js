import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import PrimaryNavbar from './components/navbar/PrimaryNavbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Rentals from './components/Rentals';
import Customers from './components/Customers';
import MovieForm from './components/MovieForm';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PrimaryNavbar />
        <main role="main" className="container">   
          <Switch>
            <Route exact  path="/movies" render={(props) => <Movies {...props} /> } />
            <Route exact  path="/movies/:id" render={(props) => <MovieForm  {...props} /> } /> 
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

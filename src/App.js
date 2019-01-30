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
  render() {
    return (
      <React.Fragment>
        <PrimaryNavbar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={PageNotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

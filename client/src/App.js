import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inscription from './Components/Inscription'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import userNonVerifies from './Components/UserNonVerifies';
import userVerifies from './Components/UserVerifies'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/insctiption" component={Inscription} />
        <Route path="/usersNonVerifies" component={userNonVerifies} />
        <Route path="/users" component={userVerifies} />
      </Router>
      
    );
  }
}

export default App;

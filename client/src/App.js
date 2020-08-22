import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import Inscription from './Components/Inscription'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import userNonVerifies from './Components/UserNonVerifies';
import userVerifies from './Components/UserVerifies'
import connexion from "./Components/Connexion"
class App extends Component {

  state = {
    registerUsername : "", 
    registerPassword : "", 
    loginUsername : "", 
    loginPassword : "", 
    data : []
  }

  componentDidMount = () => {
    this.getUser()
  }

  register = () => {
    Axios({
      method: "POST",
      data:{
        username: this.state.registerUsername,
        password : this.state.registerPassword,
      },
      withCredentials: true,
      url : "http://localhost:8080/register",
    }).then((res) => console.log(res))
  }

  login = () => {
    Axios({
      method: "POST",
      data: {
        username: this.state.loginUsername,
        password : this.state.loginPassword
      },
      withCredentials: true,
      url: "http://localhost:8080/login",
    }).then((res) => console.log(res));
  }

  getUser = () => {
    console.log("Data 1 ", this.state.data)
    Axios({
      method: "GET", 
      withCredentials: true,
      url: "http://localhost:8080/user",
    }).then((res) => {
      this.setState({data: res.data})
      console.log("resultatt" , res)
    })
    console.log("Data 2 " , this.state.data)
    
  }


  render() {
    return (
    <div className="App">
      
      
    
    {console.log("admin" , this.state.data)}
      <Router>
        <Route path="/connexion" component={connexion}></Route>
        <Route path="/inscription" component={Inscription} />
        {this.state.data.admin == true ? <Route path="/users" component={userVerifies} /> : null}
        {this.state.data.admin == true ? <Route path="/usersNonVerifies" component={userNonVerifies} /> : null}
      </Router>
    
      </div>
      
    );
  }
}

export default App;

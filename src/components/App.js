import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Form from "./Form";
import Login from './Login';
import Info from './Info';
import Bookmarks from "./Bookmarks";
import Header from './Header';
import Home from "./Home"

import '../styles/App.scss';

class App extends React.Component {
  state = {
    registered: false,
    loggedIn: false,
    username: localStorage.getItem("bookmarksUsername") || null,
    password: localStorage.getItem("bookmarksPassword") || null,
    token: null
  }


  login = () => {
    console.log("Login")
    fetch('auth/login', {
      method: 'POST',
      body: JSON.stringify({
        "loginData": {
          "username": this.state.username,
          "password": this.state.password
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(validation => {
      //console.log(validation.data.token);
      const newToken = validation.data.token
      this.setState({
        token: newToken,
        loggedIn: (newToken ? true : false)
      });
      localStorage.setItem("bookmarksToken", newToken)
    })
  }

  componentDidMount() {
    this.login()
  }

  render() {
    const routes = [
      {
        path: "/login",
        component: Form
      },
      {
        path: "/info",
        component: Info
      },
      {
        path: "/",
        exact: true,
        component: Bookmarks
      }
    ]
    return (
      <div className="App">
        <Router>
          <Header />
          <Home routes={routes} />
        </Router>
      </div>
    );
  }

}

export default App;

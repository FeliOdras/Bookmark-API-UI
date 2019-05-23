import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Form from "./Form";
import Bookmarks from "./Bookmarks";
import Header from './Header';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();

  }
  state = {
    registered: false,
    loggedIn: false,
    username: localStorage.getItem("bookmarksUsername") || null,
    password: localStorage.getItem("bookmarksPassword") || null,
    token: null
  }
  handleChange = (inputentry, e) => {
    if (inputentry === "name") {
      this.setState({
        name: e.target.value
      })
    } else if (inputentry === "password") {
      this.setState({
        password: e.target.value
      })
      console.log("testState");

    }
  }
  handleSubmit = (e) => {
    // e.preventDefault();
    // this.setState({
    //   name: e.target.value
    // })
    console.log("HandleSubmit");
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
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => {
              console.log(this.state.loggedIn); return (
                this.state.loggedIn ? (
                  <Bookmarks {...props} />
                ) : (
                    <Redirect to="/login" />
                  )
              )
            }
            } />
            <Route to="/login" render={(props) => <Form {...props} registered={this.state.registered} token={this.state.token} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
          </Switch>

        </Router>
      </div>
    );
  }

}

export default App;
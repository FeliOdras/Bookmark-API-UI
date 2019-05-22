import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Form from "./Form";
import Bookmarks from "./Bookmarks";
import Header from './Header';
import '../styles/App.scss';

class App extends React.Component {
  state = {
    registered: false,
    loggedIn: false
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => (
              this.state.loggedIn ? (
                <Bookmarks {...props} />
              ) : (
                  <Redirect to="/login" />
                )
            )} />
            <Route to="/login" render={(props) => <Form {...props} registered={this.state.registered} />} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;

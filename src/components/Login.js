import React, { Component } from 'react'
import { templateElement } from '@babel/types';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      // username: this.props.username,
      // password: this.props.password,
    }


  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }
}

render() {
  return (
    // {username } &&
    <div>
      <form onSubmit={this.handleSubmit}>
        <input id="username" name="username" type="text" />
        <br />
        <label htmlFor="username">Enter username</label>
        <br />
        <input id="password" name="password" type="text" />
        <br />
        <label htmlFor="password">Enter your password</label>
        <br />
        <div>
          {/* <button onClick={this.props.login}>Login</button> */}
          <button>Login</button>

        </div>


      </form>
    </div >

  )
}
}


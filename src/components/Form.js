import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Form extends Component {

    render() {
        console.log(this.props)
        const { registered, token } = this.props
        return (
            <div>
                <h2>{(registered && "Login") || "Sign up"}</h2>
                <form>
                    <label htmlFor="username">Enter username</label>
                    <br />
                    <input id="username" name="username" type="text" />
                    <br />
                    <label htmlFor="password">Enter your password</label>
                    <br />
                    <input id="password" name="password" type="text" />
                    <br />
                    <div>
                        {(registered && <button onClick={() => <Link to="/" />}>Log in</button>) || <button onClick={() => <Link to="/" />}>Sign Up</button>}
                    </div>
                </form>
            </div >
        )
    }
}

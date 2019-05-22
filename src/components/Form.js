import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Form extends Component {

    render() {
        console.log(this.props)
        const { registered, token } = this.props
        return (
            <div>
                <h2>{registered && "Login" || "Sign up"}</h2>
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
                        {registered && <Link to="/"><button type="submit">Log in</button></Link> || <Link to="/"><button type="submit">Sign Up</button></Link>}
                    </div>
                </form>
            </div >
        )
    }
}

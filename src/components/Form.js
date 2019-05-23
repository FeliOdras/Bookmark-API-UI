import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Form extends Component {

    render() {
        console.log(this.props);
        const { registered, token } = this.props
        return (
            <div>
                <h2>{(registered && "Login") || "Sign up"}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Enter username</label>
                    <br />
                    <input id="username" name="username" type="text" onChange={e => this.props.handleChange("name", e)} />
                    <br />
                    <label htmlFor="password">Enter your password</label>
                    <br />
                    <input id="password" name="password" type="text" onChange={e => this.props.handleChange("password", e)} />
                    <br />
                    <div>
                        {(registered && <Link to="/"><button type="submit">Log in</button></Link>) || <Link to="/"><button type="submit">Sign Up</button></Link>}
                    </div>
                </form>
            </div >
        )
    }
}

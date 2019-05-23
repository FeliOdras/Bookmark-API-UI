import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Form extends Component {

    render() {
        console.log(this.props)
        const { registered, token } = this.props
        return (
            <div>
                <h2>{(registered && "Login") || "Sign up"}</h2>
                <form className="bg-dark text-light d-inline-block m-auto p-3 rounded">
                    <label className="small text-left d-block m-0" htmlFor="username">Enter username</label>
                    <input className="border-0 rounded mb-4 d-block" id="username" name="username" type="text" />
                    <label className="small text-left d-block m-0" htmlFor="password">Enter your password</label>
                    <input className="border-0 rounded mb-4 d-block" id="password" name="password" type="text" />
                    <div>
                        {(registered && <button className="btn btn-info" onClick={() => <Link to="/" />}>Log in</button>) || <button className="btn btn-info pt-1 pb-1 w-100" onClick={() => <Link to="/" />}>Sign Up</button>}
                    </div>
                </form>
            </div >
        )
    }
}

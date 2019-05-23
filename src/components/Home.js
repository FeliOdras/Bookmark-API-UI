import React, { Component } from 'react';
import Bookmarks from "./Bookmarks";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


export default class Home extends Component {
    render() {
        console.log("Logged in " + this.props.loggedIn)
        return (
            <main className="main-content">
                <Switch>
                    {this.props.routes.map((route, index) =>
                        (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        )
                    )}
                </Switch>
            </main>
            // <>
            //     {this.props.loggedIn} ?
            //         <Bookmarks token={this.props.token} />
            //     :
            //     <Redirect to="/login" />
            // </>
        )
    }
}

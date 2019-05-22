import React from 'react'
import Navigation from './Navigation';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Info from './Info';
import Bookmarks from './Bookmarks';

function Header() {
    const routes = [
        {
            path: "/login",
            component: Login
        },
        {
            path: "/info",
            component: Info
        },
        {
            path: "/bookmarks",
            component: Bookmarks
        }
    ]
    return (
        <header className="App-header">

            <h1 className="h4 p-2">
                Bookmarks</h1>
            <Navigation>
                <Switch>
                    {routes.map((route, index) =>
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
            </Navigation>
        </header>
    )
}

export default Header




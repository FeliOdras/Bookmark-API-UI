import React from 'react'
import Navigation from './Navigation';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
            <header className="App-header">

                <h1 className="h4 p-2">
                    Bookmarks</h1>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main className="main-content">
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
            </main>
        </BrowserRouter>
    )
}

export default Header




import React from 'react'
import Navigation from './Navigation';

function Header() {
    return (<>
        <header className="App-header">

            <h1 className="h4 p-2">
                Bookmarks</h1>
            <div className="nav-container d-block w-100 ">
                <nav className="p-0 d-inline-block">
                    <Navigation />
                </nav>
            </div>
        </header>
    </>
    )
}

export default Header




import React from 'react'
import Navigation from './Navigation';

function Header() {
    return (<>
        <header className="App-header">

            <h1 className="h4 p-2">
                Bookmarks</h1>
            <nav>
                <Navigation />
            </nav>
        </header>
    </>
    )
}

export default Header




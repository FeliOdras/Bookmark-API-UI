import React from 'react'
import Navigation from './Navigation';
function Header() {

    return (
        <React.Fragment>
            <header className="App-header">

                <h1 className="h4 p-2">
                    Bookmarks</h1>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main className="main-content">
            </main>
        </React.Fragment>
    )
}

export default Header




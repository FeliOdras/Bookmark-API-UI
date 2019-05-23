import React from 'react'
import Navigation from './Navigation';

class Header extends React.Component {
    render() {
        console.log(this.props)

        return (
            <>
                <header className="App-header">

                    <h1 className="h4 p-2">
                        Bookmarks</h1>
                    <div className="nav-container w-100">
                        <nav className="d-inline-block m-auto">
                            <Navigation routes={this.props.routes} />
                        </nav>
                    </div>
                </header>
            </>
        )

    }

}

export default Header




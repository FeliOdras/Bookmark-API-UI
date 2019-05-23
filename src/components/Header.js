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
                    <nav>
                        <Navigation routes={this.props.routes} />
                    </nav>
                </header>
            </>
        )

    }
}

export default Header




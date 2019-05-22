import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul className="menu">
                <li><a href="/">Info</a></li>
                <li><a href="/">Bookmarks</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navigation

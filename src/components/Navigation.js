import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul className="menu d-flex justify-content-around p-0 m-0">
                <li className="p-2"><a href="/">Info</a></li>
                <li className="p-2"><a href="/">Bookmarks</a></li>
                <li className="p-2"><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navigation

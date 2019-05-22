import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul className="menu d-flex justify-content-around p-0 m-0">
                <li className="p-2"><Link to="/info">Info</Link></li>
                <li className="p-2"><Link to="/bookmarks">Bookmarks</Link></li>
                <li className="p-2"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation

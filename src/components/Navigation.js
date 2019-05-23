import React from 'react'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        console.log(this.props)
        const { routes } = this.props
        return (
            <ul className="menu d-flex justify-content-around p-0 m-0">
                <li className="p-2"><Link to={routes[1].path}>{routes[1].component.name}</Link></li>
                <li className="p-2"><Link to={routes[2].path}>{routes[2].component.name}</Link></li>
                <li className="p-2"><Link to={routes[0].path}>{routes[0].component.name}</Link></li>
            </ul>
        )
    }
}

export default Navigation

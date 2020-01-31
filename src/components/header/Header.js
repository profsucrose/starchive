import React from 'react'
import { Link } from 'react-router-dom'
import HeaderAuth from './HeaderAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Starchive</Link>     
            <div className="right menu">
                <HeaderAuth />
                <Link to="/" className="item">Home</Link>
            </div>
        </div>
    )
}

export default Header
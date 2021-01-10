import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './header.less'
import './media.less'

const Header: React.FC = () => {
    const [title, setTitle] = useState<string>('Boilerplate')

    return (
        <header className="heading">
            <div className="container">
            <img src="../src/assets/favicon.png" alt="logo"/>
            <div className="logo">{title}</div>

            <ul>
                <li>
                    <NavLink to='/' activeClassName="active-route" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeClassName="active-route" exact>About</NavLink>
                </li>
                <li>
                    <NavLink to='/todos' activeClassName="active-route" exact>Todos</NavLink>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default Header;
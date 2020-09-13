import React, { useState } from 'react'
import './header.less'
import './media.less'

const Header = () => {
    const [title, setTitle] = useState('Boilerplate')

    return (
        <header className="heading">
            <img src="../src/assets/favicon.png" alt="logo"/>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;
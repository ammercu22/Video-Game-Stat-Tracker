
import React from 'react'
import logo from '../assets/ApexLegendsLogo.png'
import background from '../assets/octane.png'

function Header() {
    document.body.className = "body-bg-image";
    return (
        <div className="logo">
            <img src={logo} width="350px" alt=""/>
        </div>
    )
}

export default Header

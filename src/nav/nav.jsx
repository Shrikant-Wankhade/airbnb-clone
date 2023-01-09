import React from 'react'
import logo from "../../images/logo.png"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={logo} className="navbar__logo"/>
        </nav>
    )
}
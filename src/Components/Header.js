import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <h1 className="logo"><a href="/">Sohail</a></h1>
            <ul className="navLink">
                <li>Features</li>
                <li>Developers</li>
                <li>About</li>
                <li>News</li>
                <li>Resources</li>
                <li>Contact us</li>
                <li>New company </li>
            </ul>
        </header>
           
    )
}

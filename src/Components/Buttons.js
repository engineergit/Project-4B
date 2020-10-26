import React from 'react';
import './button.css'

export const Buttons = ({ text, href, newTab }) => {
    return (
        <div className="mainbtn">
        <a className="main-button" href={href}>
            {text}
        </a>
    </div>
        )
}

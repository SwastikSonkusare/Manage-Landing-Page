import React from 'react'

import './Button.scss';

import '../Simplify/Simplify.scss';

const Button = ({ buttonText, simplifyButton }) => {
    return (
        <button className={`${simplifyButton ? "simplify__button button" : "button"}`}>
            {buttonText}            
        </button>
    )
}

export default Button

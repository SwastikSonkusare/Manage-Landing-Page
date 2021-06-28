import React from 'react'

import Button from '../Button/Button';

import './Simplify.scss';

const Simplify = () => {
    let simplifyButton = true;

    const buttonText = "Get Started";


    return (
        <div className="simplify">
            <h3 className="simplify__header">Simplify how your team works today</h3>

            <Button buttonText={buttonText} simplifyButton={simplifyButton} />
        </div>
    )
}

export default Simplify

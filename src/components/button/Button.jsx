import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline'];
// const SIZES = ['btn--medium', 'btn--large'];

export default function Button({ children, type, onClick, disabled = false, variant }) {
    // const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        // <Link to='./sign-up' className='btn-mobile'>
            <button
                // className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                className={variant === 'primary' ? 'button button-primary' : 'button button-invisible'}
                onClick={onClick}
                type={type}
                disabled={disabled}
                >
                {children}
            </button>
        // </Link>
    )
};
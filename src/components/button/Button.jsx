import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';


export default function Button({ children, type, onClick, disabled = false, variant }) {

    return (
            <button
                className={variant === 'primary' ? 'button button-primary' : 'button button-invisible'}
                onClick={onClick}
                type={type}
                disabled={disabled}
                >
                {children}
            </button>
    )
}
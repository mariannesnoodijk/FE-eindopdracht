import React from "react";
import "./Button.css";

export default function Button({ children, type, onClick, disabled = false, variant }) {

    return (
            <button
                className={variant === 'primary' ? 'button button-primary' : 'button button-secondary'}
                onClick={onClick}
                type={type}
                disabled={disabled}
                >
                {children}
            </button>
    )
}
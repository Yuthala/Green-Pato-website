import React from 'react';
import './Button.css';

//массив, содержащий css классы
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
})=> {
    // условный рендеринг (условие - содержит ли компонент buttonStyle; если не содержит - btn--primary)
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // условный рендеринг (условие - содержит ли компонент buttonSize; если не содержит - btn--medium)
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
    )
};

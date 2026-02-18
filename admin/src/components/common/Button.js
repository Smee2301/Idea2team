import React from 'react';

const Button = ({ children, variant = 'primary', size = '', className = '', onClick, type = 'button', ...props }) => {
    const classes = ['btn', `btn-${variant}`, size ? `btn-${size}` : '', className].filter(Boolean).join(' ');
    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;

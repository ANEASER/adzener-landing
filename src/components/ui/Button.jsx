import React from 'react';

// Define style constants outside the component
const BASE_STYLES = 'rounded-lg font-medium transition-colors  ';

const VARIANT_STYLES = {
    primary: 'bg-secondary-600 hover:bg-secondary-600 text-white ',
    secondary: 'bg-primary-600 hover:bg-primary-600 text-white ',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700 ',
};

const SIZE_STYLES = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    // Use the constants defined outside the component
    const buttonClasses = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`;

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;

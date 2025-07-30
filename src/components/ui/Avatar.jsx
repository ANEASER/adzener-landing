import React from 'react';

// Define size constants outside the component
const SIZE_CLASSES = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
};

const Avatar = ({
    src,
    alt,
    size = 'md',
    className = '',
}) => {
    return (
        <div className={`${SIZE_CLASSES[size]} rounded-full overflow-hidden ${className}`}>
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default Avatar;

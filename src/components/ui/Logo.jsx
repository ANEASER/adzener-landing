import React from 'react';
import { BarChart3 } from 'lucide-react';

const Logo = ({ size = 24, className = '' }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <BarChart3 size={size} className="text-black" />
        </div>
    );
};

export default Logo;
import React, { useState } from 'react';
import {
    Home,
    BarChart2,
    Globe,
    Settings,
    HelpCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../ui/Logo';

// Define constants outside the component
const ACTIVE = 'active';
const ICON_STATES = {
    HOME: 'home',
    CAMPAIGNS: 'campaigns',
    ANALYTICS: 'analytics',
    SETTINGS: 'user-settings',
    HELP: 'help'
};

const Sidebar = () => {
    const location = useLocation();
    const [activeIcon, setActiveIcon] = useState(location.pathname === '/' ? ICON_STATES.HOME : ICON_STATES.CAMPAIGNS);

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };

    return (
        <div className="h-screen w-20 fixed left-0 top-0 bg-white
         border-r border-gray-200 flex flex-col items-center py-6">
            <Logo size={32} className="mb-8" />

            <div className="flex flex-col items-center space-y-2 flex-grow">
                <Link to="/dashboard">
                    <div
                        className={`sidebar-icon ${activeIcon === ICON_STATES.HOME ? ACTIVE : ''}`}
                        onClick={() => handleIconClick(ICON_STATES.HOME)}
                    >
                        <Home size={24} />
                    </div>
                </Link>

                <Link to="/campaigns">
                    <div
                        className={`sidebar-icon ${activeIcon === ICON_STATES.CAMPAIGNS ? ACTIVE : ''}`}
                        onClick={() => handleIconClick(ICON_STATES.CAMPAIGNS)}
                    >
                        <BarChart2 size={24} />
                    </div>
                </Link>

                <div
                    className={`sidebar-icon ${activeIcon === ICON_STATES.ANALYTICS ? ACTIVE : ''}`}
                    onClick={() => handleIconClick(ICON_STATES.ANALYTICS)}
                >
                    <Globe size={24} />
                </div>
            </div>

            <div className="mt-auto flex flex-col items-center space-y-2 mb-6">
                <Link to="/user-settings">
                    <div
                        className={`sidebar-icon ${activeIcon === ICON_STATES.SETTINGS ? ACTIVE : ''}`}
                        onClick={() => handleIconClick(ICON_STATES.SETTINGS)}
                    >
                        <Settings size={24} />
                    </div>
                </Link>

                <div
                    className={`sidebar-icon ${activeIcon === ICON_STATES.HELP ? ACTIVE : ''}`}
                    onClick={() => handleIconClick(ICON_STATES.HELP)}
                >
                    <HelpCircle size={24} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

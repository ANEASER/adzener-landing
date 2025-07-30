import React from 'react';
import { Bell } from 'lucide-react';
import { format } from 'date-fns';

import Avatar from '../ui/Avatar';
import { AVATAR } from '../../utils/constants';

const Header = ({ title }) => {
    const today = format(new Date(), 'EEEE, d MMMM, yyyy');

    return (
        <header className="h-20 w-full px-8 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
                <p className="text-sm text-gray-500">{today}</p>
            </div>

            <div className="flex items-center space-x-6">
                <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
                    <Bell size={24} />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                </button>

                <Avatar
                    src={AVATAR.DEFAULT_IMAGE}
                    alt={AVATAR.ALT_TEXT}
                    fallbackSrc={AVATAR.FALLBACK_IMAGE}
                />
            </div>
        </header>
    );
};

export default Header;
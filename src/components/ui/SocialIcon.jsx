import React,  { useMemo } from 'react';
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    BookText as TikTok
} from 'lucide-react';

const SocialIcon = ({ platform, size = 16 }) => {
    const getIcon = useMemo(() => {
        switch (platform.toLowerCase()) {
            case 'facebook':
                return <Facebook size={size} className="text-[#1877F2]" />;
            case 'instagram':
                return <Instagram size={size} className="text-[#E1306C]" />;
            case 'twitter':
                return <Twitter size={size} className="text-[#1DA1F2]" />;
            case 'linkedin':
                return <Linkedin size={size} className="text-[#0A66C2]" />;
            case 'tiktok':
                return <TikTok size={size} className="text-[#000000]" />;
            default:
                return null;
        }
    }, [platform, size]);

    return (
        <div className="social-icon">
            {getIcon}
        </div>
    );
};

export default SocialIcon;
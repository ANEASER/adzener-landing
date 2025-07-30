import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import SocialIcon from '../ui/SocialIcon';

const CampaignCard = ({ campaign, index }) => {
    return (
        <motion.div
            className="campaign-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <img
                src={campaign.thumbnail}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <div className="absolute top-6 right-6 bg-white/90 
            backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                Campaign duration: {campaign.duration}
            </div>

            <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>

            <div className="flex space-x-2">
                {campaign.platforms.map((platform) => (
                    <SocialIcon key={platform} platform={platform} />
                ))}
            </div>
        </motion.div>
    );
};

export default CampaignCard;
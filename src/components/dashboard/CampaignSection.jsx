import React from 'react';

import CampaignCard from './CampaignCard';

const CampaignSection = ({ campaigns }) => {
    return (
        <div>
            <h2 className="text-2xl  mb-8 text-center text-gray-800 "> 
                Campaigns made just for you.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign, index) => (
                    <CampaignCard
                        key={campaign.id}
                        campaign={campaign}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default CampaignSection;
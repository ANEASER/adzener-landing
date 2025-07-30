import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import Button from '../ui/Button';

const WelcomeSection = ({ username }) => {
    const navigate = useNavigate();

    const handleCreateCampaign = () => {
        navigate('/campaigns'); // Navigate to the campaign creation page
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
                <motion.h2
                    className="text-3xl font-bold mb-2 text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome {username}.
                </motion.h2>

                <motion.h3
                    className="text-3xl font-bold mb-6 text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Let's get you started.
                </motion.h3>

                <motion.p
                    className="text-gray-600 mb-8 max-w-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Create powerful, data-driven campaigns in minutes with AI that
                    simplifies the process, optimizes your strategy, and lets you focus
                    on what truly matters—results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button size="lg" onClick={handleCreateCampaign}>Create Campaign</Button>
                </motion.div>
            </div>

            <div className="flex-1 video-overlay rounded-xl overflow-hidden">
                <div className="relative">
                    <img
                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Marketing dashboard demo"
                        className="w-full h-auto rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="bg-secondary-600 rounded-full p-4 cursor-pointer
                     hover:bg-secondary-600/90 transition-colors">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white"
                            >
                                <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;

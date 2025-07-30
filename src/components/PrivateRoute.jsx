import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, requireEmailVerification = false }) => {
    const { user, isLoading } = useAuth();

    // Show loading while checking authentication
    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '18px'
            }}>
                Loading...
            </div>
        );
    }

    // If no user, redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If email verification is required and not verified, redirect to verification page
    if (requireEmailVerification && !user.emailVerified) {
        return <Navigate to="/signup-3" replace />;
    }

    return children;
};

export default PrivateRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RoleBasedRoute = ({ children, allowedRoles = [], requireEmailVerification = true }) => {
    const { user, role, isLoading } = useAuth();

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

    // If email verification is required and not verified
    if (requireEmailVerification && !user.emailVerified) {
        return <Navigate to="/signup-3" replace />;
    }

    // Check if user has required role
    if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default RoleBasedRoute;
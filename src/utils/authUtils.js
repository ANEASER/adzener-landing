// src/utils/authUtils.js
import { auth } from "../firebase/config";
import { 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendPasswordResetEmail 
} from "firebase/auth";

/**
 * Handle Firebase authentication errors
 * @param {Object} error - Firebase error object
 * @returns {string} - User-friendly error message
 */
export const handleFirebaseError = (error) => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return "This email is already registered. Try logging in instead.";
        case 'auth/weak-password':
            return "Password is too weak. Please use at least 6 characters.";
        case 'auth/invalid-email':
            return "Please enter a valid email address.";
        case 'auth/operation-not-allowed':
            return "Email/password accounts are not enabled.";
        case 'auth/user-not-found':
            return "No account found with this email address.";
        case 'auth/wrong-password':
            return "Incorrect password. Please try again.";
        case 'auth/invalid-credential':
            return "Invalid email or password. Please check your credentials.";
        case 'auth/too-many-requests':
            return "Too many failed attempts. Please try again later.";
        case 'auth/user-disabled':
            return "This account has been disabled. Please contact support.";
        case 'auth/network-request-failed':
            return "Network error. Please check your internet connection.";
        default:
            return error.message || "An unexpected error occurred. Please try again.";
    }
};

/**
 * Sign in user with email and password
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise} - Firebase user credential
 */
export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: handleFirebaseError(error) };
    }
};

/**
 * Sign out current user
 * @returns {Promise} - Sign out result
 */
export const signOutUser = async () => {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: handleFirebaseError(error) };
    }
};

/**
 * Send password reset email
 * @param {string} email 
 * @returns {Promise} - Reset email result
 */
export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { success: true, message: "Password reset email sent! Check your inbox." };
    } catch (error) {
        return { success: false, error: handleFirebaseError(error) };
    }
};

/**
 * Get current authenticated user
 * @returns {Promise} - Current user or null
 */
export const getCurrentUser = () => {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
        });
    });
};

/**
 * Check if user's email is verified
 * @param {Object} user - Firebase user object
 * @returns {boolean} - Whether email is verified
 */
export const isEmailVerified = (user) => {
    return user ? user.emailVerified : false;
};

/**
 * Validate email format
 * @param {string} email 
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password 
 * @returns {Object} - Validation result with isValid and message
 */
export const validatePassword = (password) => {
    if (password.length < 6) {
        return { isValid: false, message: "Password must be at least 6 characters long" };
    }
    if (password.length > 128) {
        return { isValid: false, message: "Password is too long" };
    }
    return { isValid: true, message: "Password is valid" };
};

/**
 * Clean up localStorage items related to authentication
 */
export const cleanupAuthStorage = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    localStorage.removeItem("userData");
};
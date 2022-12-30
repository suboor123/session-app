import { firebaseAuth } from '@/firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

export const authHelper = {
    /**
     * Authenticate user
     * @param {*} email
     * @param {*} password
     * @returns
     */
    signUp(email, password) {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    },

    /**
     * Creates user account
     * @param {*} email
     * @param {*} password
     * @returns
     */
    signIn(email, password) {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    },

    /**
     * Set current user id to local storage of the browser
     * @param {*} uid
     */
    setCurrentUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    },
};

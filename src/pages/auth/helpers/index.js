import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth } from '../../../firebase-config';

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

    signIn(email, password) {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    },

    saveUserLocalStorage(uid) {
        const user = { uid: uid };
        localStorage.setItem('user', JSON.stringify(user));
    },
};

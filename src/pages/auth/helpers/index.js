import { createUserWithEmailAndPassword } from 'firebase/auth';
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
};

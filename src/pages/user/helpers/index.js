import { ref, set } from 'firebase/database';
import { firebaseDb } from '../../../firebase-config';
import { UserRole } from '../constants';

export const userHelper = {
    path: 'user/',

    /**
     * Creates a new user in firebase realtime database
     * @param {*} uid
     * @param {*} user
     */
    createUser(uid, user) {
        user.role = UserRole.Student;
        set(ref(firebaseDb, this.path + uid), user);
    },

    /**
     * Check wether the user is authenticated or not
     */
    get isAuthenticated() {
        return localStorage.getItem('user') !== null;
    },
};

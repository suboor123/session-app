import { child, get, onValue, ref, set } from 'firebase/database';
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
     * Sync user by id from firebase realtime database
     * @param {*} id
     * @returns
     */
    async syncUserById(id) {
        const dbRef = ref(firebaseDb);
        const snapshot = await get(child(dbRef, `${this.path}/${id}`));
        return snapshot.val();
    },

    /**
     * Check wether the user is authenticated or not
     * @return {boolean}
     */
    get isAuthenticated() {
        return localStorage.getItem('user') !== null;
    },

    /**
     * Check if user role is admin
     * @returns {boolean}
     */
    get isAdmin() {
        const user = localStorage.getItem('user');
        if (user) JSON.parse(user).role === UserRole.Admin;
    },
};

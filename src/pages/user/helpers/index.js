import { ref, set } from 'firebase/database';
import { firebaseDb } from '../../../firebase-config';

export const userHelper = {
    path: 'user/',

    createUser(uid, user) {
        set(ref(firebaseDb, this.path + uid), user);
    },
};

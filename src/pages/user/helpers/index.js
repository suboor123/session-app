import { ref, set } from 'firebase/database';
import { firebaseDb } from '../../../firebase-config';
import { UserRole } from '../constants';

export const userHelper = {
    path: 'user/',

    createUser(uid, user) {
        user.role = UserRole.Student;
        set(ref(firebaseDb, this.path + uid), user);
    },
};

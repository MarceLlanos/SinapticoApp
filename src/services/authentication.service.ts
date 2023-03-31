import { auth, firestore } from "@/firebase";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Firestore, collection, doc, getDoc } from "firebase/firestore";

export type DataRegister = {
    email: string,
    password: string
}

export const getCurrentUser = (): User | null => {
    return auth.currentUser;
}

export const registerUserEmailPassword = async (dataRegister: DataRegister) => {
    const { email, password } = dataRegister;
    const user = await createUserWithEmailAndPassword(auth, email, password)
        .then(
            ({ user }) => (user)
        ).catch(_err => {
            const error = _err.code;
            const errorMessage = _err.message;
            return { error, errorMessage };
        });
    return user;
}

export const loginUserEmailPassword = async (dataLogin: DataRegister) => {
    const { email, password } = dataLogin;
    const user = await signInWithEmailAndPassword(auth, email, password)
        .then(
            ({ user }) => (user)
        ).catch(_err => {
            const error = _err.code;
            const errorMessage = _err.message;
            return { error, errorMessage };
        });
    return user;
}

export const getDbUser = async (uid: string) => {
    const dbUserCollection = collection(firestore, 'user');
    const userDoc = doc(dbUserCollection, uid);
    const user = await getDoc(userDoc)

}

export const logoutUser = () => {
    const currentUserUid = getCurrentUser()?.uid;
}
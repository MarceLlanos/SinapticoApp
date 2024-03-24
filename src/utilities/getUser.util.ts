import { UserGoogle } from "@/models";
import { getUser } from "@/services";

export const getUserAssigned = async (uid: string): Promise<UserGoogle> => {
    if (!uid) return {
        email: '',
        photoUrl: '',
        userName: '',
        uid: ''
    };
    const user = await getUser(uid);
    return user;
};
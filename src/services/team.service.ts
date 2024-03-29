import { firestore } from "@/firebase";
import {
    AddUserInput,
    CodesProject,
    Result,
    UserTeam,
    UserTeamInput,
    UserTeamRoles,
    MemberInput,
    JoinUserTeamResult
} from "@/models"
import {
    collection,
    deleteDoc,
    getDocs,
    query,
    where,
    doc,
    DocumentData
} from "firebase/firestore";
import { getUser } from "./authentication.service";
import { addDocument, updateDocumentByFieldValue } from "./collection.service";

const codeRef = collection(firestore, 'codesProject');
const usersCollectionRef = collection(firestore, 'team');

export const getCodeProjectData = async (code: string): Promise<CodesProject> => {
    try {
        const queryRef = query(codeRef, where('code_project', '==', code));
        const querySnapshot = await getDocs(queryRef);

        if (querySnapshot.empty) {
            return {
                id_project: '',
                code_project: ''
            }
        } else {
            const data = querySnapshot.docs[0].data();
            return {
                id_project: data.id_project,
                code_project: data.code_project
            }
        }
    } catch (error) {
        throw error;
    }
}
export const addMemberToProject = async (data: AddUserInput): Promise<Result> => {
    try {
        const currentUser = await getUser(data.uid);
        const user = {
            uid: currentUser.uid,
            userName: currentUser.userName,
            email: currentUser.email,
            photoUrl: currentUser.photoUrl
        }
        await addDocument('team', {
            ...user,
            role: data.role,
            id_project: data.id_project,
            timeJoin: new Date()
        });

        return {
            isSuccess: true,
            message: 'Ya formas parte de tu equipo!'
        }
    } catch (error) {
        return {
            isSuccess: false,
            message: `No pudiste ser agregado al equipo :( ${error}`
        }
    }
}
export const addMemberWithCodeProject = async (data: UserTeamInput): Promise<JoinUserTeamResult> => {
    try {
        const { id_project } = await getCodeProjectData(data.code_project);
        const currentUser = await getUser(data.uid);
        const user = {
            uid: currentUser.uid,
            userName: currentUser.userName,
            email: currentUser.email,
            photoUrl: currentUser.photoUrl
        }

        await addDocument('team', {
            ...user,
            role: UserTeamRoles.TEAM,
            id_project: id_project,
            timeJoin: new Date()
        });

        return {
            isSuccess: true,
            message: 'Ya formas parte de tu equipo!',
            id_project: id_project
        }

    } catch (error) {
        return {
            isSuccess: false,
            message: `No pudiste ser agregado al equipo :( ${error}`,
            id_project: ''
        }
    }
}
export const updateTeamMember = async (data: UserTeam): Promise<Result> => {
    try {
        await updateDocumentByFieldValue('team', 'id_project', data.id_project, data);
        return {
            isSuccess: true,
            message: 'Datos actualizados correctamente!'
        }
    } catch (error) {
        return {
            isSuccess: false,
            message: 'Ups! no se pudo actualizar los datos'
        }
    }
}
export const DeleteTeamMember = async (data: MemberInput): Promise<Result> => {
    try {
        const queryUser = query(usersCollectionRef, where('id_project', '==', data.id_project), where('uid', '==', data.uid));

        const querySnapshot = await getDocs(queryUser);

        querySnapshot.docs.forEach(async (dataDoc) => {
            const docRef = doc(usersCollectionRef, dataDoc.id);
            await deleteDoc(docRef);
        });

        return {
            isSuccess: true,
            message: 'Miembro de equipo eliminado correctamente!'
        }
    } catch (error) {
        throw error;
    }
}
export const getTeamMembers = async (id_project: string): Promise<UserTeam[]> => {
    try {
        const queryToGetTeam = query(usersCollectionRef, where('id_project', '==', id_project));

        const querySnapshot = await getDocs(queryToGetTeam);
        const dataTeam = querySnapshot.docs.map(data => (data.data()));
        const team: UserTeam[] = dataTeam.map(data => ({
            uid: data.uid,
            id_project: data.id_project,
            email: data.email,
            userName: data.userName,
            photoUrl: data.photoUrl,
            role: data.role,
        }));

        return team;
    } catch (error) {
        throw error;
    }
}
export const getATeamMember = async (data: MemberInput): Promise<UserTeam> => {
    try {
        const queryGetMember = query(usersCollectionRef, where('id_project', '==', data.id_project), where('uid', '==', data.uid));
        const querySnapshot = await getDocs(queryGetMember);


        if (querySnapshot.docs.length < 1) {
            throw new Error('No se encontro algun documente referente al id proyecto.');
        }

        const member = querySnapshot.docs[0].data();

        const teamMember: UserTeam = {
            uid: member.uid,
            id_project: member.id_project,
            email: member.email,
            userName: member.userName,
            photoUrl: member.photoUrl,
            role: member.role
        }
        return teamMember;
    } catch (error) {
        throw error;
    }
}
export const getUserProjects = async (uid: string): Promise<DocumentData[]> => {
    try {
        const queryGetMember = query(usersCollectionRef, where('uid', '==', uid));
        const querySnapshot = await getDocs(queryGetMember);

        const projectsIds = querySnapshot.docs.map((doc) => doc.data());

        return projectsIds;
    } catch (error) {
        throw error;
    }
}
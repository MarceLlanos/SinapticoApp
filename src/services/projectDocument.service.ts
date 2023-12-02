import { firestore } from "@/firebase";
import { codeGenerator } from "@/helpers";
import { ProjectInput, Project, ProjectResult, DriveInput } from "@/models";
import { DocumentData, collection, getDocs, query, where } from "firebase/firestore";
import { addDocument, deleteDocument, getDocumentById, updateDocument } from "./collection.service";
import { getUser } from "./authentication.service";

const projectRef = collection(firestore, 'project');
export const createNewProject = async (dataProject: ProjectInput): Promise<ProjectResult> => {
    try {
        const {
            user_id,
            name_proj,
            description,
            assigment,
            professor,
            date_release,
        } = dataProject;

        const codeGenerated = codeGenerator();
        const dateProjectRelease = new Date(date_release);
        const projectData = {
            user_id,
            name_proj,
            description,
            assigment,
            professor,
            date_release: dateProjectRelease,
            code_project: codeGenerated,
            createAt: new Date()
        }

        const docRef = await addDocument('project', projectData);
        const currentUser = await getUser(user_id);
        const user = {
            uid: currentUser.uid,
            userName: currentUser.userName,
            email: currentUser.email,
            photoUrl: currentUser.photoUrl
        }

        await addDocument('team', {
            ...user,
            role: 'PO',
            id_project: docRef.id,
            timeJoin: new Date()
        })

        return {
            isSuccess: true,
            message: 'Proyecto creado satisfactoriamente!',
            id_project: docRef.id
        }

    } catch (error) {
        return {
            isSuccess: false,
            message: `No se pudo crear el proyecto debido a ${error}`
        };
    }
};

export const addDrive = async ({ id_project, drive_link }: DriveInput): Promise<ProjectResult> => {
    try {

        await updateDocument('project', id_project, { drive_link });

        return {
            isSuccess: true,
            message: 'Se agregó satisfactoriamente el drive al proyecto!'
        }
    } catch (error) {
        return {
            isSuccess: false,
            message: `No se pudo agregar el link de drive al proyecto debido a ${error}`
        };
    }
}

export const updateProjectData = async (id_project: string, projectInput: ProjectInput): Promise<ProjectResult> => {
    try {
        await updateDocument('project', id_project, projectInput);
        return {
            isSuccess: true,
            message: 'Se actualizó satisfactoriamente los datos del proyecto!'
        }

    } catch (error) {
        return {
            isSuccess: false,
            message: `No se pudo actualizar correctamente los datos proyecto debido a ${error}`
        };
    }
}

export const deleteProjectData = async (id_project: string): Promise<ProjectResult> => {
    try {
        await deleteDocument('project', id_project);
        return {
            isSuccess: true,
            message: 'Se eliminó satisfactoriamente el proyecto!'
        }
    } catch (error) {
        return {
            isSuccess: false,
            message: `No se pudo eliminar correctamente el proyecto debido a ${error}`
        };
    }
}

export const getProjectsByUserId = async (uid: string): Promise<Array<Project>> => {
    try {
        const userProjectsQuery = query(projectRef, where('userId', '==', uid));
        const userProjectsSnapshot = await getDocs(userProjectsQuery);
        const userProjects: Array<Project> = [];
        userProjectsSnapshot.docs.map((doc) => {
            const { id } = doc;
            const data = doc.data();
            const project = {
                id_project: id,
                user_id: data.user_id,
                name_proj: data.name_proj,
                description: data.description,
                assigment: data.assigment,
                professor: data.professor,
                date_release: data.date_release,
                code_project: data.code_project,
                drive_link: data.drive_link,
                createAt: data.createAt,
            }

            userProjects.push(project);
        });
        return userProjects;

    } catch (error) {
        throw error;
    }
}

export const getProject = async (id_project: string) => {
    try {
        const data = await getDocumentById('project', id_project);
        return data;
    } catch (error) {
        throw error;
    }
}

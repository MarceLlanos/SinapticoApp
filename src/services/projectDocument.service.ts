import { firestore } from "@/firebase";
import { codeGenerator } from "@/helpers";
import {
    ProjectInput,
    Project,
    ProjectResult,
    DriveInput,
    CodesProject,
    UserTeamRoles,
    UserTeam
} from "@/models";
import { collection, getDocs, query, where } from "firebase/firestore";
import { addDocument, deleteDocument, getDocumentById, updateDocument } from "./collection.service";
import { addMemberToProject } from "./team.service";

const projectRef = collection(firestore, 'project');
const codeRef = collection(firestore, 'codesProject');
const usersCollectionRef = collection(firestore, 'team');

export const isCodeAlreadyGenerated = async (code: string): Promise<Boolean> => {
    try {
        const queryRef = query(codeRef, where('code_project', '==', code));
        const querySnapshot = await getDocs(queryRef);
        if (querySnapshot.empty) {
            return false;
        } else {
            return true;
        }

    } catch (error) {
        throw error;
    }
}

export const codesGenerated = async (codeData: CodesProject) => {
    const codeRef = await addDocument('codesProject', codeData);
    return codeRef;
}

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
        const verifyCode = await isCodeAlreadyGenerated(codeGenerated);
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


        if (verifyCode === false) {
            const docRef = await addDocument('project', projectData);
            await codesGenerated({
                id_project: docRef.id,
                code_project: codeGenerated
            });

            await addMemberToProject({
                id_project: docRef.id,
                role: UserTeamRoles.PO,
                uid: user_id,
            });

            return {
                isSuccess: true,
                message: 'Proyecto creado satisfactoriamente!',
                id_project: docRef.id
            }
        } else {
            return {
                isSuccess: false,
                message: 'Por favor vuelva a intentar, si vuelve a ocurrir avise al administrador de la pagina!'
            }
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

export const getProject = async (id_project: string): Promise<Project> => {
    try {
        const data = await getDocumentById('project', id_project);

        const project: Project = {
            id_project: id_project,
            user_id: data!.user_id,
            name_proj: data!.name_proj,
            description: data!.description,
            assigment: data!.assigment,
            professor: data!.professor,
            date_release: data!.date_release,
            code_project: data!.code_project,
            drive_link: data!.drive_link,
            createAt: data!.createAt,
        }

        return project;
    } catch (error) {
        throw error;
    }
}

export const getProjectsByUserId = async (uid: string): Promise<Project[]> => {
    try {
        const queryGetMember = query(usersCollectionRef, where('uid', '==', uid));
        const querySnapshot = await getDocs(queryGetMember);

        const projectsIds = querySnapshot.docs.map((doc) => doc.data());
        const projects: Project[] = await Promise.all(projectsIds.map(async data =>
            await getProject(data.id_project)
        ));
        return projects;
    } catch (error) {
        throw error;
    }
}
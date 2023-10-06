import { auth, firestore } from "@/firebase";
import { DataProject } from "@/models";
import { addDoc, collection } from "firebase/firestore";

const projectsCollection = collection(firestore, 'project');

export const createProjectDocService = async (dataProject: DataProject) => {
    return await addDoc(projectsCollection, {
        userId: auth.currentUser?.uid,
        nameProject: dataProject.nameProject,
        description: dataProject.description,
        assigment: dataProject.assigment,
        proffessorName: dataProject.proffessorName,
        dateDeliverProject: dataProject.dateDeliverProject,
    });
};




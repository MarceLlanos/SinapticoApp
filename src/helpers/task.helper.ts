import { firestore } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


function formatTaskNumber(taskCount: number) {
    if (taskCount < 10) {
        return `0${taskCount}`;
    } else {
        return taskCount.toString();
    }
}

const taskCollection = collection(firestore, 'task');

export async function titleTask(id_project: string): Promise<string> {
    const taskQuery = query(taskCollection, where('id_project', '==', id_project));
    const querySnapshot = await getDocs(taskQuery);

    const taskQuerysnapshot = querySnapshot.docs.map((doc) => doc.data());

    const amountTask = taskQuerysnapshot.length;
    if (amountTask === 0) {
        return 'Tarea 01';
    } else {
        const numTask = amountTask + 1;
        return `Tarea ${formatTaskNumber(numTask)}`;
    }
}
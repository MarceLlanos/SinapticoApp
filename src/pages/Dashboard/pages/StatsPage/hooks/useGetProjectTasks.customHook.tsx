import { TaskList } from "@/models";
import { AppDispatch, getTasksProject } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetProjectTask = (id_project: string ) => {
    const [projectTasks, setProjectTasks] = useState<TaskList>([]);
    const dispatch = useDispatch<AppDispatch>();
    const getAllTasksProject = async () => {
        try {
            const dataResult = await dispatch(getTasksProject(id_project)).unwrap();
            setProjectTasks(dataResult);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAllTasksProject();
    }, []);
    return {
        projectTasks,
        getAllTasksProject
    };
}
 
export default useGetProjectTask;
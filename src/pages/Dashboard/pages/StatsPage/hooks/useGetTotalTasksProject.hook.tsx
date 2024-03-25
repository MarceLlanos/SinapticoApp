import { AppDispatch, getTotalProjectTasks } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
 
const useGetTotalTasksProject = () => {
    const { project } = useParams();
    const [totalTasks, setTotalTasks] = useState<number>(0);
    const dispatch = useDispatch<AppDispatch>();

    const getTotalTotalTasks =  async () => {
        try {
            const data = await dispatch(getTotalProjectTasks(project!)).unwrap();
            setTotalTasks(data);
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        getTotalTotalTasks();
    }, [])
    
    return {
        totalTasks,
        getTotalTotalTasks
    };
}
 
export default useGetTotalTasksProject;
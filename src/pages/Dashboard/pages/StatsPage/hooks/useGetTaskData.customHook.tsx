
import { Task, TasksByState } from "@/models";
import { AppDispatch, getTaskProjectByState } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const useGetTaskData= ({ id_project, stateTask }: TasksByState) => {
    const dispatcher = useDispatch<AppDispatch>();
    const [dataTasks, setDataTasks] = useState<Task[]>([]);
    
    const getDataTask =  async () => {
        try {
            const data = await dispatcher(getTaskProjectByState({ id_project, stateTask })).unwrap();
            setDataTasks(data);
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        getDataTask();
    }, []);
    
    console.log(stateTask);
    return {
        dataTasks,
        getDataTask
    } ;
}
 
export default useGetTaskData;
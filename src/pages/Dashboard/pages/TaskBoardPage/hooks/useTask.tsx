import { TasksByState, Task } from "@/models";
import { AppDispatch, getTaskProjectByState, getTasksProject } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useTask = (project_id: string) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await dispatch(getTasksProject(project_id)).unwrap();
                setTasks(result);
            } catch (error) {
                setError('No se pudo cargar las tareas');
            }
            setLoading(false);
        }

        fetchData();
    }, [project_id]);

    return {
        tasks,
        loading,
        error
    }
    
}
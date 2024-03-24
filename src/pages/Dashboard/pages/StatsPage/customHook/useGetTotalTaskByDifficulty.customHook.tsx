
import { LevelDifficultyInput } from "@/models";
import { AppDispatch, getTotalTasksLevelDifficulty } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const useGetTotalTaskByDifficulty = ({ id_project, levelDifficulty }: LevelDifficultyInput) => {
    const dispatch = useDispatch<AppDispatch>();
    const [totalTask, setTotalTask] = useState<number>(0);
    
    const getTotalTask =  async () => {
        try {
            const data = await dispatch(getTotalTasksLevelDifficulty({ id_project, levelDifficulty })).unwrap();
            setTotalTask(data);
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        getTotalTask();
    }, []);

    return {
        totalTask,
        getTotalTask
    } ;
}
 
export default useGetTotalTaskByDifficulty;
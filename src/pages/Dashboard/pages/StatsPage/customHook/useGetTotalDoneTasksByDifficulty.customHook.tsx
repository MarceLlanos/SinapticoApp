
import { LevelDifficultyStateInput } from "@/models";
import { AppDispatch, getTotalTaskLevelDifficultyState } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const useGetTotalDoneTaskByDifficulty = ({ id_project, levelDifficulty, stateTask }: LevelDifficultyStateInput) => {
    const dispatch = useDispatch<AppDispatch>();
    const [totalDoneTask, setTotalDoneTask] = useState<number>(0);

    
    const getTotalTask =  async () => {
        try {
            const data = await dispatch(getTotalTaskLevelDifficultyState({ id_project, levelDifficulty, stateTask})).unwrap();
            setTotalDoneTask(data);
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        getTotalTask();
    }, []);

    return {
        totalDoneTask,
        getTotalTask
    } ;
}
 
export default useGetTotalDoneTaskByDifficulty;
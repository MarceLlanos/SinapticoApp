import { AppDispatch, getTotalTaskState } from '@/redux';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function useGetTotalTasksStateProject(state:string) {
    const { project } = useParams();
    const [totalTasksState, setTotalTasksState] = useState<number>(0);
    const dispatch = useDispatch<AppDispatch>();

    const getTotalTasksByState = async () => {
        try {
            const data = await dispatch(getTotalTaskState({ id_project: project!, stateTask: state })).unwrap();
            setTotalTasksState(data);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        getTotalTasksByState();
    }, [totalTasksState])
    
    return {
        totalTasksState,
        getTotalTasksByState
    }
}

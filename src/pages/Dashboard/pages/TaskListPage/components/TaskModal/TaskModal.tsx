
import React, { useEffect, useState } from 'react';
import './style/index.css';
import { CustomModal } from '@/pages/Dashboard/components';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TaskInput, TaskLevel, UserTeam, stateTask } from '@/models';
import { InputCustom } from '@/pages/Register';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskFormSchema } from './schemas/taskForm.schema';
import { Resolver } from 'react-hook-form';
import { DialogActions, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ButtonPrimary } from '@/styled-components';
import { AppDispatch, createATask } from '@/redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMembersTeam } from '@/redux/asyncState/team.async';


interface ITaskModalProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskModal: React.FC<ITaskModalProps> = ({ openModal, setOpenModal }) => {

    const colors = ['red', 'yellow', 'green', 'black'];
    const {project, uid} = useParams();
    const timeEstimations = [1, 2, 3, 5, 8, 13];
    const dispatch = useDispatch<AppDispatch>();
    const [team, setTeam] = useState<UserTeam[]>([]);
    const { 
        register,
        control,
        handleSubmit,
        formState,
        reset
    } = useForm<TaskInput>({
        defaultValues: {
            id_project: '',
            uidAssignedTo: team.length>0 ? team[0].uid: '',
            description: '',
            timeAssigned: timeEstimations[0],
            levelDifficulty: 'red',
            stateTask: stateTask.PENDIENTE
        },
        mode: 'onChange',
        resolver: yupResolver(taskFormSchema) as Resolver<TaskInput, any>
    });
    const formContextValues = { register, formState };

    const handleSubmitTask: SubmitHandler<TaskInput> = async dataTask => {
        try {
            const task = {
                ...dataTask,
                id_project: project!
            }
            await dispatch(createATask(task)).unwrap();
            
			reset();
		} catch (error) {
			throw error;
		}
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await dispatch(getMembersTeam(project!)).unwrap();
            setTeam(data);
        }
        fetchData();
    }, []);

    return (
        <CustomModal
            dialogTitle='Nueva Tarea'
            showExtraModalData={ false }
            open={ openModal }
            setOpen= {setOpenModal}
        >
            <FormProvider {...formContextValues as any}>
                <form
                    onSubmit={handleSubmit(handleSubmitTask)}
                >
                    <InputCustom
						id = 'description-modal'
						name = 'description'
						label = 'Descripción'
                        type='text'
						required = { true }
                        disabled={false}
                        maxRows={2}
					/>
                    <h3 className="textNormal mt-1">Estimación de la tarea:</h3>
                    <div className="optionContentSelect">
                        <FormControl required>
                            <InputLabel id="time-input-modal">Tiempo aproximado de duración</InputLabel>
                            <Controller
                                name='timeAssigned'
                                control={control}
                                defaultValue={timeEstimations[0]}
                                render={({ field }) => (        
                                    <Select
                                        {...field}
                                        labelId="time-input-modal"
                                        id="timeAssigned"
                                        label="Tiempo aproximado de duración"
                                    >
                                        {
                                            timeEstimations.map((time, index) => (
                                            <MenuItem key={index} value={time}>
                                                <p>{time}</p>
                                            </MenuItem>
                                        ))
                                        }
                                    </Select>
                                )}
                            />
                        </FormControl>
                        
                        <FormControl required>
                            <InputLabel id="tasklevel-select-modal">Grado de Dificultad</InputLabel>
                            <Controller
                                name='levelDifficulty'
                                control={control}
                                defaultValue={TaskLevel[0]}
                                render={({ field }) => (        
                                    <Select
                                        {...field}
                                        labelId="tasklevel-select-modal"
                                        id="levelDifficulty"
                                        label="Grado de Dificultad"
                                    >
                                        {
                                            colors.map((color, index) => (
                                                <MenuItem key={index} value={color}>
                                                    {TaskLevel[color] !== undefined ? TaskLevel[color] : color} <div className={`color ${ color } ml-1`}></div>
                                                    
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div className="pendienteContainer">  
                        <h3 className="textNormal mt-1">Estado de la tarea: </h3>
                        <p className="  ml-1">Pendiente</p>
                    </div>

                    <h3 className="textNormal mt-1">Asignar a:</h3>
                    <FormControl
                        required
                        sx={{ width: "calc(48%)", marginBlockStart: "12px" }}
                    >
                        <InputLabel id="user-select-modal">Asignar a:</InputLabel>
                        <Controller
                            control={control}
                            defaultValue={team.length>0? team[0].uid : uid}
                            name='uidAssignedTo'
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    labelId="user-select-modal"
                                    id="uidAssignedTo"
                                    label="Selecciona a miembro(s)"
                                >
                                    {
                                        team.map((member, index) => (
                                            <MenuItem key={index} value={member.uid}>{ member.userName }</MenuItem>
                                        ))
                                    }
                                </Select>
                            )}
                        />
                    </FormControl>
                    <DialogActions className="mt-3">
                        {/* <ButtonGrey onClick={}>Cancelar</ButtonGrey> */}
                        <ButtonPrimary type='submit'>Guardar</ButtonPrimary>
                    </DialogActions>
                </form>
            </FormProvider>
        </CustomModal>
    );
}

export default TaskModal;

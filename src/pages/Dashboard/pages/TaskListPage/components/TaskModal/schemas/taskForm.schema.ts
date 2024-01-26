import * as yup from 'yup';

export const taskFormSchema = yup.object({
    id_project: yup.string(),
    uidAssignedTo: yup.string(),
    description: yup.string().required('Debe ingresar una descripción breve sobre la tarea').min(30, 'Debe ingresar mínimo 30 caracteres de descripción.').max(250, 'Ingresa máximo 250 caracteres para la descripción.'),
    timeAssigned: yup.number().required('Debe seleccionar una opción'),
    levelDifficulty: yup.string().required('Debe seleccionar una opción'),
    stateTask: yup.string().required('Debe seleccionar una opción')
})
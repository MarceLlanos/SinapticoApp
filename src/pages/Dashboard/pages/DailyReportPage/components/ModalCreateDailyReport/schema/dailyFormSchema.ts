import * as yup from 'yup';

export const dailyFormSchema = yup.object({
    user_id: yup.string().required(),
    id_project: yup.string().required(),
    whatIDid: yup.string().required('Debe ingresar una descripción acerca de que avances realizó con las tareas asignadas a usted!').min(20, 'Debe ingresar un mínimo de 20 caracteres!').max(250, "Solo puede ingresar un maximo de 250 caracteres!"),
    problemsIHave: yup.string().required('Debe ingresar una descripción acerca de que un problema que tuvo con alguna tarea asignada. En caso de no tener alguna tarea asignada ingrese "Sin ningún incoveniente"').min(20, 'Debe ingresar un mínimo de 20 caracteres!').max(250, "Solo puede ingresar un maximo de 250 caracteres!"),
    whatWillIDo: yup.string().required('Debe ingresar una descripción acerca de que tareas realizará!').min(20, 'Debe ingresar un mínimo de 20 caracteres!').max(250, "Solo puede ingresar un maximo de 250 caracteres!"),
})

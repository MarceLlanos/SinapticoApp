import * as yup from 'yup';

export const registerFormSchema = yup.object({
    userName: yup.string().required('El nombre de usuario es requerido').matches(/^[a-zA-Z]+$/, 'Ingrese un nombre que no contenga números ni caracteres especiales.'),
    email: yup.string().required('El email es requerido').matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Por favor, introduzca un email tipo gmail valido!'),
    password: yup.string().required('El password es requerido').min(5, 'El password o contraseña debe tener al menos 5 caracteres')
});
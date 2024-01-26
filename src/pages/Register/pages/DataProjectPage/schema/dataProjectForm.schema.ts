import * as yup from 'yup';
import { dateReleaseVerification, formatDate } from '@/helpers';

export const dataProjectFormSchema = yup.object({
    user_id: yup.string(),
    name_proj: yup.string().required('El nombre del proyecto es requerido'),
    description: yup.string().required('Debe ingresar una breve descripción de 20 palabras del proyecto')
        .test('maxWords', 'El máximo permitido es de 20 palabras', (value) => {
            const wordCount = value?.trim().split(/\s+/).length || 0;
            return wordCount <= 20;
        }),
    assigment: yup.string().required('El nombre de la materia es requerida'),
    professor: yup.string().required('El nombre del profesor es requerido'),
    date_release: yup.date().required('La fecha de límite de entrega es requerida')
        .test(
            'Ingrese una fecha que sea mínimo 2 días mayor a la actual',
            (value) => {
                const dateString = formatDate(value);
                return dateReleaseVerification(dateString)
            }
        ),
});
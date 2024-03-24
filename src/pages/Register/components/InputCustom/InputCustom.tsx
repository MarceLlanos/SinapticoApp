
import { Path, FieldValues, useFormContext, FieldErrors } from 'react-hook-form';
import { TextField, Typography } from '@mui/material';

interface IInputCustomProps<T> {
    id: string;
    name: Path<T>;
    label: string;
    type: string;
    maxRows?: number;
    inputLabelProps?: {};
    required: boolean;
    disabled: boolean;
    sx?: {}
}

export const formValidation = <T extends FieldValues>(errors: FieldErrors<T>, errorKey: string) => {
    const errorMessage = errors[errorKey]?.message as string;

    return errors[errorKey] ? (
        <Typography color='red' sx={{fontSize: '0.75rem', fontWeight: '100'}}>{errorMessage}</Typography>
    ) : (
        ''
    );
};

const InputCustom = <T extends FieldValues>({ id, name, label, type, required = false, disabled = false, maxRows = 1, inputLabelProps= {}, sx }: IInputCustomProps<T>) => {
    const { register, formState } = useFormContext<T>();
    const { errors } = formState;

    return (
        <>
            <TextField
                id={id}
                label={label}
                type={type}
                required={required}
                disabled={disabled}
                error={errors && !!errors[name]}
                margin='normal'
                maxRows={maxRows}
                InputLabelProps={inputLabelProps}
                {...register(name)}
                sx={sx}
                fullWidth
                autoComplete={type === 'email' ? 'email' : 'off'} 
            />
            { errors && formValidation(errors, name) }
        </>
    );
}

export default InputCustom;

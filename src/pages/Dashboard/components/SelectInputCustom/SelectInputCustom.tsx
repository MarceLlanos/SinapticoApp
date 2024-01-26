import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import { Path, FieldErrors, useFormContext } from 'react-hook-form';


interface ISelectInputCustomProps<T> {
    id: string,
    name: Path<T>,
    label: string,
    labelSelect: string,
    options: [],
    required: boolean,
    children: React.ReactNode,
}

export const selectFormValidation = (errors: FieldErrors, errorKey: string) => {
  const errorMessage = errors[errorKey]?.message as string;

  return errors[errorKey] ? (
    <Typography color="red">{errorMessage}</Typography>
  ) : (
    ''
  );
};

const SelectInputCustom= <T extends {}>({ id, name, label, labelSelect, options, required = false, children }: ISelectInputCustomProps<T>) => {
    const { register, formState } = useFormContext<T>();
    const { errors } = formState;

    return (
        <>
            <FormControl
                required ={required}
                sx={{ width: "calc(48%)", marginBlockStart: "12px" }}
            >
                <InputLabel id={`${id}-select`}>{ label }</InputLabel>
                <Select
                    labelId={`${id}-select`}
                    id={id}
                    value={ name }
                    label={labelSelect}
                    {...register(name)}
                >
                    {
                        options.map(option => (
                            <MenuItem key={option} value={option}>
                                {children}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            {errors && selectFormValidation(errors, name)}
        </>
    );
}

export default SelectInputCustom;

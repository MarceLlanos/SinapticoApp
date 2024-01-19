
import React, { useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';
import { formValidation } from '../InputCustom/InputCustom';

interface IInputPasswordCustomProps {
    name: string;
    label: string;
}

const InputPasswordCustom: React.FC<IInputPasswordCustomProps> = ({ name, label}) => {
	const [showPassword, setShowPassword] = useState(false);
	const { register, formState } = useFormContext();
	const { errors } = formState;

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<FormControl sx={{ width: '100%' }} variant="outlined" className='mt-1'>
			<InputLabel htmlFor="password-input">Contraseña * </InputLabel>
			<OutlinedInput
				id="password-input"
				type={showPassword ? 'text' : 'password'}
				required
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				{...register(name)}
				error={errors && !!errors[name]}
				label={label}
				fullWidth
			/>
			{ errors && formValidation(errors, name)}
		</FormControl>
	);
}

export default InputPasswordCustom;

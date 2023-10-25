
import React, { useState } from 'react';
import './style/index.css';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from '@mui/material';

interface IFormTaskProps {

}

const FormTask: React.FC<IFormTaskProps> = () => {
    const [color, setColor] = useState('');
    const [nameUser, setNameUser] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        console.log(color);
        setColor(event.target.value);
    };

    const handleChangeName = (event: SelectChangeEvent) => {
        setNameUser(event.target.value);
    }

    return (
        <form className="formTaskContainer greyDarkText ">
            <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                maxRows={2}
                fullWidth
            />
            <h3 className='textNormal mt-1'>Estimación de la tarea:</h3>
            <div className="optionContentSelect">
                <TextField
                    required
                    id="outlined-required"
                    label="Tiempo aproximado de duración"
                    sx={{ width: 'calc(50%)', marginRight: '8px'}}
                />
                <FormControl required sx={{ width: 'calc(48%)' }}>
                    <InputLabel id="color-select">Grado de Dificultad</InputLabel>
                    <Select
                        labelId="color-select"
                        id="color-select"
                        value={color}
                        label="Grado de Dificultad"
                        onChange={handleChange}
                    >
                        <MenuItem value='red'>Alta <div className="color red"></div></MenuItem>
                        <MenuItem value='yellow'>Media <div className="color yellow"></div></MenuItem>
                        <MenuItem value='green'>Baja <div className="color green"></div></MenuItem>
                        <MenuItem value='black'>Imposible <div className="color black"></div></MenuItem>
                    </Select>
                </FormControl>
            </div>
            <h3 className='textNormal mt-1'>Asignar a:</h3>
            <FormControl required sx={{ width: 'calc(48%)', marginBlockStart: '12px' }}>
                <InputLabel id="color-select">Asignar a:</InputLabel>
                <Select
                    labelId="color-select"
                    id="color-select"
                    value={nameUser}
                    label="Selecciona a miembro(s)"
                    onChange={handleChangeName}
                >
                    <MenuItem value='Alejandro Baute'>Alejandro Baute</MenuItem>
                    <MenuItem value='Marcelo Urey'>Marcelo Urey</MenuItem>
                    <MenuItem value='Isabel Lopez Trigo'>Isabel Lopez Trigo</MenuItem>
                    <MenuItem value='Mariana Lopez Trigo'>Mariana Lopez Trigo</MenuItem>
                </Select>
            </FormControl>
        </form>
    );
}

export default FormTask;

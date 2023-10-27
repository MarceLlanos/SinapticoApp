import React, { ReactElement, Ref, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slide,
  TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonGrey, ButtonPrimary } from "@/styled-components";
import { TransitionProps } from "@mui/material/transitions";

import "./style/index.css";

interface ICreateModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateModal: React.FC<ICreateModalProps> = ({
  isOpenModal,
  closeModal
}) => {
  const [color, setColor] = useState("");
  const [nameUser, setNameUser] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(color);
    setColor(event.target.value);
  };

  const handleChangeName = (event: SelectChangeEvent) => {
    setNameUser(event.target.value);
  };
  return (
    <Dialog
        open={isOpenModal}
        onClose={closeModal}
        TransitionComponent={Transition}
        keepMounted
        sx={{ padding: "12px" }}
    >
        <DialogTitle className="textBold greyDarkText">Nueva Tarea</DialogTitle>
        <IconButton
        aria-label="close"
        onClick={closeModal}
        sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "var(--grey-text-dark)"
        }}
        >
            <CloseIcon />
        </IconButton>
        <Divider />
        <DialogContent>
            <form className="formTaskContainer greyDarkText textNormal ">
                <TextField
                    id="outlined-multiline-static"
                    label="Descripción"
                    multiline
                    maxRows={2}
                    fullWidth
                />
                <h3 className="textNormal mt-1">Estimación de la tarea:</h3>
                <div className="optionContentSelect">
                    <TextField
                        required
                        id="outlined-required"
                        label="Tiempo aproximado de duración"
                        sx={{ width: "calc(50%)", marginRight: "8px" }}
                    />
                    <FormControl required sx={{ width: "calc(48%)" }}>
                        <InputLabel id="color-select">Grado de Dificultad</InputLabel>
                        <Select
                            labelId="color-select"
                            id="color-select"
                            value={color}
                            label="Grado de Dificultad"
                            onChange={handleChange}
                        >
                            <MenuItem value="red">
                                Alta <div className="color red ml-1"></div>
                            </MenuItem>
                            <MenuItem value="yellow">
                                Media <div className="color yellow ml-1"></div>
                            </MenuItem>
                            <MenuItem value="green">
                                Baja <div className="color gree ml-1n"></div>
                            </MenuItem>
                            <MenuItem value="black">
                                Imposible <div className="color black ml-1"></div>
                            </MenuItem>
                        </Select>
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
                    <InputLabel id="color-select">Asignar a:</InputLabel>
                    <Select
                        labelId="color-select"
                        id="color-select"
                        value={nameUser}
                        label="Selecciona a miembro(s)"
                        onChange={handleChangeName}
                    >
                        <MenuItem value="Alejandro Baute">Alejandro Baute</MenuItem>
                        <MenuItem value="Marcelo Urey">Marcelo Urey</MenuItem>
                        <MenuItem value="Isabel Lopez Trigo">Isabel Lopez Trigo</MenuItem>
                        <MenuItem value="Mariana Lopez Trigo"> Mariana Lopez Trigo </MenuItem>
                    </Select>
                </FormControl>
                <DialogActions className="mt-3">
                    <ButtonGrey onClick={closeModal}>Cancelar</ButtonGrey>
                    <ButtonPrimary>Guardar</ButtonPrimary>
                </DialogActions>
            </form>
        </DialogContent>
    </Dialog>
  );
};

export default CreateModal;

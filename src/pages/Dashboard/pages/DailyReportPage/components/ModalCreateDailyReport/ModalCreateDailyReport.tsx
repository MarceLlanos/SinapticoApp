
import React, { ReactElement, Ref } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Slide, TextField } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from "@mui/icons-material/Close";
import { ButtonGrey, ButtonPrimary } from '@/styled-components';

import './style/index.css';

interface IModalCreateDailyReportProps {
    isOpenModal: boolean;
    closeModal: () => void;
}

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalCreateDailyReport: React.FC<IModalCreateDailyReportProps> = ({
  isOpenModal,
  closeModal
}) => {
    return (
        <Dialog
            open={isOpenModal}
            onClose={closeModal}
            TransitionComponent={Transition}
            keepMounted
            sx={{ padding: "12px" }}
        >
        <DialogTitle className="textBold greyDarkText">Nuevo Reporte</DialogTitle>
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
        <Divider
         />
        <DialogContent>
            <form className="formTaskContainer greyDarkText textNormal ">
                <Box
                    sx={{
                        '& .MuiTextField-root': { mb: 2 }
                        }}
                >        
                    <TextField
                        required        
                        id="outlined-multiline-static"
                        label="Lo que hice"
                        multiline
                        maxRows={2}
                        fullWidth
                    />
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Problemas para realizar la tarea"
                        multiline
                        maxRows={2}
                        fullWidth
                    />
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Lo que haré"
                        multiline
                        maxRows={2}
                        fullWidth  
                    />
                </Box>        
                <DialogActions className="mt-3">
                    <ButtonGrey onClick={closeModal}>Cancelar</ButtonGrey>
                    <ButtonPrimary>Guardar</ButtonPrimary>
                </DialogActions>
            </form>
        </DialogContent>
    </Dialog>
    );
}

export default ModalCreateDailyReport;

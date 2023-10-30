
import React from 'react';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    TextField
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Transition } from '../ModalCreateDailyReport/ModalCreateDailyReport';

import './style/index.css';
import { ButtonGrey } from '@/styled-components';

interface IModalCommentsReportProps {
    isOpenModal: boolean;
    closeModal: () => void;
}

const ModalCommentsReport: React.FC<IModalCommentsReportProps> = ({isOpenModal, closeModal}) => {
    return (
        <Dialog
            open={isOpenModal}
            onClose={closeModal}
            TransitionComponent={Transition}
            keepMounted
            sx={{ padding: "12px" }}
        >   
            <Box component="section" display="flex" alignItems="center" justifyContent="space-between" width="calc(100% - 10%)">
                <DialogTitle className="textBold greyDarkText"> Reporte de Tyler Morris </DialogTitle>

                <div className="dateModal textNormal">
                    <p>Jueves 20 de Julio</p>
                    <p className='primaryText'>14:00</p>
                </div>
            </Box>
            
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
                <Box
                    sx={{
                        '& .MuiBox-root': { mb: 1 }
                        }}
                >
                    <h3 className='textBold mb-1'>Descripción:</h3>
                    <Box component="section" sx={{ p: 1, border: '0.5px solid grey', fontSize: '0.8rem' }}>
                        <h4 className='textBold'>Lo que hice:</h4>
                        <p>Se realizo la tarea 01, investigando en internet y consultando el libro mensionado por el Docente</p>
                        <h4 className='textBold'>Problemas para realizar la tarea:</h4>
                        <p>No se presento ningun problema para realizar mi tarea.</p>
                        <h4 className='textBold'>Lo que haré:</h4>
                        <p>Seleccionar una nueva tarea y empezar a trabajar en ella.</p>    
                    </Box>
                    <Box component="section" display="flex" alignItems="center" className='primaryText'>
                        <StarBorderIcon />
                        <p>Like 0</p>
                    </Box>
                    <h3 className='textBold mb-1'>Comentarios</h3>
                    <Divider />    
                    <Box
                        overflow="scroll"
                        width="calc(100%)"
                        height="calc( 100% - 20% )"
                        mt={1}    
                    >
                        <Box component="section" sx={{ p: 1, border: '0.5px solid grey', fontSize: '0.8rem' }}>
                            <h4 className='textBold'>Frank Murray</h4>
                            <p>Se realizo la tarea 01, investigando en internet y consultando el libro mensionado por el Docente</p>
                        </Box>
                        <Box component="section" sx={{ p: 1, border: '0.5px solid grey', fontSize: '0.8rem' }}>
                            <h4 className='textBold'>Frank Murray</h4>
                            <p>Se realizo la tarea 01, investigando en internet y consultando el libro mensionado por el Docente</p>
                        </Box>
                    </Box>    
                    
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Agregar comentario…"
                        multiline
                        maxRows={3}
                        fullWidth  
                    />
                </Box>        
                <DialogActions className="mt-3">
                    <ButtonGrey onClick={closeModal}>Guardar</ButtonGrey>
                </DialogActions>
            </form>
        </DialogContent>
    </Dialog>
    );
}

export default ModalCommentsReport;

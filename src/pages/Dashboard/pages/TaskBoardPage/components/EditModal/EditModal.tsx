
import React, { ReactElement, useState } from 'react';
import './style/index.css';
import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { FormTask } from '@/pages/Dashboard/components';
import { ButtonGrey, ButtonPrimary } from '@/styled-components';

interface IEditModalProps {
    isOpenModal: boolean
    closeModal: () => void
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditModal: React.FC<IEditModalProps> = ({ isOpenModal, closeModal }) => {


    return (
        <Dialog
            open={isOpenModal}
            onClose={closeModal}
            TransitionComponent={Transition}
            keepMounted
            sx={{ padding: '12px'}}
        >
            <DialogTitle>
                Editar tarea 01
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={closeModal}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'var(--grey-text-dark)',
                }}
            >
                <CloseIcon />
            </IconButton>
            <Divider />
            <DialogContent>
                <FormTask />
            </DialogContent>
            <DialogActions>
                <ButtonGrey>Cancelar</ButtonGrey>
                <ButtonPrimary>Guardar</ButtonPrimary>
            </DialogActions>
        </Dialog>
    );
}

export default EditModal;

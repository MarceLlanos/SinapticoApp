
import React, { ReactElement, Ref } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from "@mui/icons-material/Close";
import { ButtonGrey, ButtonPrimary } from '@/styled-components';

import './style/index.css';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver } from 'react-hook-form';
import { DailyReportInput } from '@/models';
import { dailyFormSchema } from './schema';
import { InputCustom } from '@/pages/Register';
import { useParams } from 'react-router-dom';

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
    const { uid, project } = useParams();
    const ids = {
        user_id: uid,
        id_project: project
    }

    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<DailyReportInput>({
        defaultValues: {
            user_id: '',
            id_project: '',
            whatIDid:'',
            problemsIHave: '',
            whatWillIDo: ''
        },
        mode: 'onChange',
        resolver: yupResolver(dailyFormSchema) as Resolver<DailyReportInput, any>
    });

    const formContextValues = { register, formState };

    const handleSubmitDailyReport: SubmitHandler<DailyReportInput> = (data) => {
        console.log(uid, project, data);
        const dailyReport: DailyReportInput = {
            ...ids,
            ...data
        }
        console.log('======>',dailyReport);
        reset();
        closeModal();
    }
    
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
            <Divider/>
            <DialogContent>
                <FormProvider {...formContextValues as any}>
                    <form
                        className="formTaskContainer greyDarkText textNormal"
                        onSubmit={handleSubmit(handleSubmitDailyReport)}
                    >
                        <Box
                            sx={{
                                '& .MuiTextField-root': { mb: 2 }
                                }}
                        >        
                            <InputCustom
                                id='whatIDidInput'
                                name='whatIDid'
                                required = { true }
                                label="Lo que hice"
                                type='text'
                                maxRows={2}
                                disabled={false}
                            />
                            <InputCustom
                                id='problemsIHaveInput'
                                name='problemsIHave'
                                required = { true }
                                label="Problemas para realizar la tarea"
                                type='text'
                                maxRows={2}
                                disabled={false}
                            />
                            <InputCustom
                                id='whatWillIDoInput'
                                name='whatWillIDo'
                                required = { true }
                                label="Lo que haré"
                                type='text'
                                maxRows={2}
                                disabled={false}
                            />
                        </Box>        
                        <DialogActions className="mt-3">
                            <ButtonGrey onClick={closeModal}>Cancelar</ButtonGrey>
                            <ButtonPrimary type='submit'>Guardar</ButtonPrimary>
                        </DialogActions>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    );
}

export default ModalCreateDailyReport;

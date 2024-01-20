
import React, { ReactElement, Ref, useEffect, useState } from 'react';
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Slide
} from '@mui/material';
import { GridCloseIcon } from '@mui/x-data-grid';
import { TransitionProps } from '@mui/material/transitions';
import { SubjectManager } from '@/models';
import { Subscription } from 'rxjs';

import './style/index.css';

interface ICustomModalProps {
    children: React.ReactNode;
    dialogTitle: string;
    showExtraModalData: boolean;
    extraDataModal: {
        date: string,
        clock: string
    }
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomModal: React.FC<ICustomModalProps> = ({ children, dialogTitle, showExtraModalData = false, extraDataModal = { date: '', clock: '' } }) => {
    const [open, setOpen] = useState(false);
    let openSubject$ = new Subscription();
    let closeSubject$ = new Subscription();

    const openDialog = () => {
        setOpen(true);
    }

    const closeDialog = () => {
        setOpen(false);
    }

    const exitDialog = () => {
        dialogCloseSubject$.setSubject = false;
    }

    useEffect(() => {
        openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => openDialog());
        closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => closeDialog());
        return () => {
            openSubject$.unsubscribe();
            closeSubject$.unsubscribe();
        };
    }, []);

    return (
        <Dialog
            open={open}
            onClose={() => exitDialog()}
            TransitionComponent={Transition}
            keepMounted
            sx={{ padding: "12px" }}
        >
            <Box component="section" display="flex" alignItems="center" justifyContent="space-between" width="calc(100% - 10%)">
                <DialogTitle className="textBold greyDarkText">{ dialogTitle }</DialogTitle>
                {
                    showExtraModalData && (
                        <div className="dateModal textNormal">
                            <p>{ extraDataModal.date }</p>
                            <p className='primaryText'>{ extraDataModal.clock }</p>
                        </div>
                    )
                }
            </Box>
        <IconButton
            aria-label="close"
            onClick={() => exitDialog()}
            sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "var(--grey-text-dark)"
            }}
        >
            <GridCloseIcon />
        </IconButton>
        <Divider />
        <DialogContent>
            { children }
        </DialogContent>
    </Dialog>
    );
}

export default CustomModal;


import React from 'react';
import './style/index.css';
import { Badge, IconButton, MenuItem } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface IIconBadgeButtonProps {

}

const IconBadgeButton: React.FC<IIconBadgeButtonProps> = (props) => {
    return (
        <>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon sx={{ color: 'var(--grey-text)' }} />
                </Badge>
            </IconButton>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon sx={{ color: 'var(--grey-text)' }} />
                </Badge>
            </IconButton>
        </>
    );
}

export default IconBadgeButton;

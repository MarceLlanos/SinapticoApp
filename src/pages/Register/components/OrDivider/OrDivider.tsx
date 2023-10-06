
import React from 'react';
import './style/index.css';
import { Divider } from '@mui/material';

interface IOrDividerProps {

}

const OrDivider: React.FC<IOrDividerProps> = () => {
    return (
        <div className='container mt-1'>
            <Divider className='flex' />
            <span className='span ml-1 mr-1'>ó</span>
            <Divider className='flex'/>
        </div>
    );
}

export default OrDivider;

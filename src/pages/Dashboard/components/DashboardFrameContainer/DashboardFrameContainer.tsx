
import React from 'react';
import './style/index.css';
import { SideMenu } from '../SideMenu';
import { AppBar } from '../AppBar';

interface IDashboardFrameContainerProps {
    children: JSX.Element[] | JSX.Element;
}

const DashboardFrameContainer: React.FC<IDashboardFrameContainerProps> = ({ children }) => {
    return (
        <div className='dashboard-container'>
            <SideMenu />
            <div className="right-container">
                <AppBar />
                <div className="container">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
}

export default DashboardFrameContainer;


import React from 'react';
import './style/index.css';
import { SideMenu } from '../SideMenu';
import { AppBar } from '../AppBar';

interface IDashboardFrameContainerProps {
    children: React.ReactElement[] | React.ReactElement;
}

const DashboardFrameContainer: React.FC<IDashboardFrameContainerProps> = ({ children }) => {

  return (
    <div className='dashboardContainer'>
      <SideMenu />
      <div className="rightContainerFrame">
        <AppBar/>
        <div className="frameContentContainer">
          {
              children
          }
        </div>
      </div>
    </div>
  );
}

export default DashboardFrameContainer;

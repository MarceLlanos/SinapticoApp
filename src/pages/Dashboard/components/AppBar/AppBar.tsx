
import React from 'react';

import './style/index.css';
import { IconBadgeButton, InputSearch, UserAccountMenu } from './components';

interface IAppBarProps {

}


const AppBar: React.FC<IAppBarProps> = (props) => {
    

    return (
        <div className="appBarContainer">
            <div className="leftContainer">
                <InputSearch />
            </div>
            <div className="rightContainer">
                <IconBadgeButton />
                <UserAccountMenu urlImage='' userName='Eric Jordan'/>
            </div>
        </div>
    );
}

export default AppBar;

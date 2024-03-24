
import React, { useState } from 'react';
import { ItemMenu } from '../ItemMenu';
import { useParams } from 'react-router-dom';

import './style/index.css';
import { menuBottomItems, menuItems } from './helpers';

interface ISideMenuProps {

}


const SideMenu: React.FC<ISideMenuProps> = () => {
    const { project, uid } = useParams();
    const [activeItem, setActiveItem] = useState<string>('');

    const handleSetActiveItem = (label: string) => {
        setActiveItem(label);
    };

    return (
        <div className="menu-container">
            <div className="container-imagotipo">
                <img src='../../src/assets/images/imagotipo-sinaptico.svg'/>
            </div>
            {
                menuItems.map(({ icon, label, navigateUrl }) => (
                    <ItemMenu 
                        key={label}
                        icon={icon}
                        label={label}
                        navigateUrl={`/${navigateUrl}/${project}/${uid}`} 
                        isActive={activeItem===label}
                        setActiveItem={handleSetActiveItem}
                    />
                ))
            }
            <div className="foot-menu-container">
                {
                    menuBottomItems.map(({ icon, label, navigateUrl }) => (
                        <ItemMenu 
                            key={label}
                            icon={icon}
                            label={label}
                            navigateUrl={`/${navigateUrl}/${project}/${uid}`}
                            isActive={activeItem===label}
                            setActiveItem={handleSetActiveItem}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SideMenu;

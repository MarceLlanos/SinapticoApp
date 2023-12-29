
import React, { useState } from 'react';
import './style/index.css';
import { useNavigate } from 'react-router-dom';
import { IconSVG } from './components';


interface IItemMenuProps {
    icon: string;
    label: string;
    navigateUrl: string;
}

const ItemMenu: React.FC<IItemMenuProps> = ({ icon, label, navigateUrl }) => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setClicked(true);
        navigate(navigateUrl, {replace: true });
    }

    return (
        <div
            className={`item-container textNormal rowContainer ${clicked ? 'clicked' : ''}`}
            onClick={ handleClick }
        >
            <div className="icon-item-container">
                <IconSVG className='icon' icon={ icon } />
            </div>
            <div className="label-item-container">
                <p>{ label }</p>
            </div>
        </div>
    );
}

export default ItemMenu;

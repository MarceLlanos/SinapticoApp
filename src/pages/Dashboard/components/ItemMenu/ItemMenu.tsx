
import React, { useEffect, useState } from 'react';
import './style/index.css';
import { useNavigate } from 'react-router-dom';
import { IconSVG } from './components';
import { Link } from 'react-router-dom';


interface IItemMenuProps {
    icon: string;
    label: string;
    navigateUrl: string;
    isActive: boolean;
    setActiveItem: (lavel: string) => void;
}

const ItemMenu: React.FC<IItemMenuProps> = ({ icon, label, navigateUrl, isActive, setActiveItem }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        setActiveItem(label);
        navigate(navigateUrl);
    }

    return (
        <div
            className={`item-container textNormal rowContainer ${isActive ? 'clicked' : ''}`}
            onClick={handleClick}
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


import React, { useState } from 'react';
import './style/index.css';
import { useNavigate } from 'react-router-dom';
import { IconSVG } from './components';
import { Link } from 'react-router-dom';


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
        navigate(navigateUrl);
    }

    return (
        <Link
            className={`item-container textNormal rowContainer ${clicked ? 'clicked' : ''}`}
            to={ navigateUrl }
        >
            <div className="icon-item-container">
                <IconSVG className='icon' icon={ icon } />
            </div>
            <div className="label-item-container">
                <p>{ label }</p>
            </div>
        </Link>
    );
}

export default ItemMenu;

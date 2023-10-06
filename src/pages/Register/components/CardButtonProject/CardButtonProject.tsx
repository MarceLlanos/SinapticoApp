
import React from 'react';
import './style/cardButton.css';

interface ICardButtonProjectProps {
    materia: string;
    proyecto: string;
}

const CardButtonProject: React.FC<ICardButtonProjectProps> = (props) => {
    const { materia, proyecto } = props;

    return (
        <div className="cardContainer grow mb-1">
            <div className="imageCardContainer">
                <img src="../src/assets/icons/users.svg" alt="Siluetas de un grupo de usuarios" />
            </div>
            <div className="descriptionCardContainer greyDarkText textLight">
                <span>28 Nov 2022</span>
                <p>Equipo</p>
                <p>Materia: { materia }</p>
                <p>Proyecto: { proyecto }</p>
            </div>
        </div>
    );
}

export default CardButtonProject;

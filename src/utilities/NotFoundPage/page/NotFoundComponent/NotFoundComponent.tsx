
import React from 'react';
import './style/index.css';

interface INotFoundPageProps {

}

const NotFoundPageComponent: React.FC<INotFoundPageProps> = (props) => {
    return (
        <>
            <div className="container">
                <h2>
                    No se encontro la pagina!
                </h2>
            </div>
        </>
    );
}

export default NotFoundPageComponent;


import React from 'react';
import './style/barTitle.css';

interface IBarTitleProps {
    title: String
}

const BarTitle: React.FC<IBarTitleProps> = ({title}) => {
    return (
        <div className="barTitleContainer greyDarkText">
            <h2 className='textLight'>{ title }</h2>
        </div>
    );
}

export default BarTitle;

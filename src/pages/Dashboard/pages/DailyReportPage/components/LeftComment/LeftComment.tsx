
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';

import './style/leftComment.css';

interface ILeftCommentProps {
    children: JSX.Element[] | JSX.Element;
    date: string;
}

const LeftComment: React.FC<ILeftCommentProps> = ({ children }) => {
    return (
        <div className="leftCommentContainer">
            <div className="commentLollipop">
                <div className="lollipopDateContainer">
                    <div className="date right textNormal mr-1">
                        <p>Jueves 20 de Julio</p>
                        <p className='greenText'>14:00</p>
                    </div>
                    <div className="lollipopContainer">
                        <div className="blueLollipop">
                            <CreateIcon sx={{ color: 'var(--white-text)' }} />  
                        </div>
                        <div className="stick"></div>
                    </div>
                </div>
                <div className="containerChildren ml-1">
                    { children }
                </div>
            </div>
            
        </div>
    );
}

export default LeftComment;

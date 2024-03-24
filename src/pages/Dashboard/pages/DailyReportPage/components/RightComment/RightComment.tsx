
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';

import './style/rightComment.css';

interface IRightCommentProps {
    children: JSX.Element[] | JSX.Element;
}

const RightComment: React.FC<IRightCommentProps> = ({children}) => {
    return (
        <div className="rightCommentContainer">
            <div className="leftCommentLollipop">
                <div className="containerChildren mr-1">
                    { children }
                </div>
                <div className="lollipopDateContainer">
                    <div className="lollipopContainer">
                        <div className="lollipop">
                            <CreateIcon sx={{ color: 'var(--white-text)' }} />  
                        </div>
                        <div className="stick"></div>
                    </div>
                    <div className="date textNormal">
                        <p>Jueves 20 de Julio</p>
                        <p className='greenText'>14:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightComment;

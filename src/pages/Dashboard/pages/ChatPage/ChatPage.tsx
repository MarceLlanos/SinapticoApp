
import React from 'react';

import './style/index.css';
import { DashboardFrameContainer } from '../../components';

interface IChatPageProps {

}

const ChatPage: React.FC<IChatPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <p>hola desde Chat Page</p>
        </DashboardFrameContainer>
    );
}

export default ChatPage;
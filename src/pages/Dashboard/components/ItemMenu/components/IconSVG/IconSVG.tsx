
import React from 'react';
import { TaskBoardSVG } from '../TaskBoardSVG';
import { FilesDriveSVG } from '../FilesDriveSVG';
import { TaskListSVG } from '../TaskListSVG';
import { ChatSVG } from '../ChatSVG';
import { HelpSVG } from '../HelpSVG';
import { ReportSVG } from '../ReportSVG';
import { SettingSVG } from '../SettingSVG';
import { StaticsSVG } from '../StaticsSVG';
import { ReviewSVG } from '../ReviewSVG';
import { TeamSVG } from '../TeamSVG';


interface IIconSVGProps {
    icon: string;
    className: string;
}

const IconSVG: React.FC<IIconSVGProps> = ({ icon, className }) => {

    const iconSvg: { [key: string]: JSX.Element } = {
        tablero: <TaskBoardSVG className={className} />,
        files: <FilesDriveSVG className={className} />,
        lista: <TaskListSVG className={className} />,
        reporte: <ReportSVG className={className} />,
        estadisticas: <StaticsSVG className={className} />,
        revision: <ReviewSVG className={className} />,
        equipo: <TeamSVG className={className} />,
        chat: <ChatSVG className={className} />,
        help: <HelpSVG className={className} />,
        settings: <SettingSVG className={className} />,
    }

    return (
        <>
            { iconSvg[icon] }
        </>
    );
}

export default IconSVG;

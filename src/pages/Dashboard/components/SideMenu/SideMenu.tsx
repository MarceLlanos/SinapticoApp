
import React from 'react';
import { ItemMenu } from '../ItemMenu';
import { useNavigate, useParams } from 'react-router-dom';

import './style/index.css';
import { PrivateDashboardRoutes } from '@/models';

interface ISideMenuProps {

}

const SideMenu: React.FC<ISideMenuProps> = (props) => {
    const { project } = useParams();

    return (
        <div className="menu-container">
            <div className="container-imagotipo">
                <img src='../src/assets/images/imagotipo-sinaptico.svg'/>
            </div>
            <ItemMenu icon='tablero' label='Tablero de tareas' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.TASKBOARD}/${project}`} />
            <ItemMenu icon='files' label='Archivos del proyecto' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.DRIVEBOARD}/${project}`} />
            <ItemMenu icon='lista' label='Lista global de tareas' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.TASKLIST}/${project}`} />
            <ItemMenu icon='reporte' label='Reporte Diario' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.DAILYREPORT}/${project}`} />
            <ItemMenu icon='estadisticas' label='Estadisticas' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.STATICS}/${project}`} />
            <ItemMenu icon='revision' label='Revisión y Retrospectiva de fases' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.PHASESREVIEW}/${project}`} />
            <ItemMenu icon='equipo' label='Equipo y roles' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.TEAM}/${project}`} />
            <ItemMenu icon='chat' label='Chat' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.CHAT}/${project}`} />
            <div className="foot-menu-container">
                <ItemMenu icon='help' label='Ayuda' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.HELP}/${project}`} />
                <ItemMenu icon='settings' label='Configuración' navigateUrl={`${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.SETTINGS}/${project}`} />
            </div>
        </div>
    );
}

export default SideMenu;

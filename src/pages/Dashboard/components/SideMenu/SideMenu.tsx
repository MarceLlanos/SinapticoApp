
import React from 'react';
import { ItemMenu } from '../ItemMenu';
import { useNavigate } from 'react-router-dom';

import './style/index.css';
import { PrivateDashboardRoutes } from '@/models';

interface ISideMenuProps {

}

const SideMenu: React.FC<ISideMenuProps> = (props) => {

    const navigate = useNavigate();

    return (
        <div className="menu-container">
            <div className="container-imagotipo">
                <img src='../src/assets/images/imagotipo-sinaptico.svg'/>
            </div>
            <ItemMenu icon='tablero' label='Tablero de tareas' navigateUrl={PrivateDashboardRoutes.TASKBOARD} />
            <ItemMenu icon='files' label='Archivos del proyecto' navigateUrl={PrivateDashboardRoutes.DRIVEBOARD} />
            <ItemMenu icon='lista' label='Lista global de tareas' navigateUrl={PrivateDashboardRoutes.TASKLIST} />
            <ItemMenu icon='reporte' label='Reporte Diario' navigateUrl={PrivateDashboardRoutes.DAILYREPORT} />
            <ItemMenu icon='estadisticas' label='Estadisticas' navigateUrl={PrivateDashboardRoutes.STATICS} />
            <ItemMenu icon='revision' label='Revisión y Retrospectiva de fases' navigateUrl={PrivateDashboardRoutes.PHASESREVIEW} />
            <ItemMenu icon='equipo' label='Equipo y roles' navigateUrl={PrivateDashboardRoutes.TEAM} />
            <ItemMenu icon='chat' label='Chat' navigateUrl={PrivateDashboardRoutes.CHAT} />
            <div className="foot-menu-container">
                <ItemMenu icon='help' label='Ayuda' navigateUrl={PrivateDashboardRoutes.HELP} />
                <ItemMenu icon='settings' label='Configuración' navigateUrl={PrivateDashboardRoutes.SETTINGS} />
            </div>
        </div>
    );
}

export default SideMenu;

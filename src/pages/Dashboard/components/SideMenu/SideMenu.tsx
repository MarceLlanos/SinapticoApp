
import React from 'react';
import { ItemMenu } from '../ItemMenu';
import { useParams } from 'react-router-dom';

import './style/index.css';
import { PrivateDashboardRoutes } from '@/models';

interface ISideMenuProps {

}

const SideMenu: React.FC<ISideMenuProps> = () => {
    const { project, uid } = useParams();

    return (
        <div className="menu-container">
            <div className="container-imagotipo">
                <img src='../../src/assets/images/imagotipo-sinaptico.svg'/>
            </div>
            <ItemMenu icon='tablero' label='Tablero de tareas' navigateUrl={`/${PrivateDashboardRoutes.TASKBOARD}/${project}/${uid}`} />
            <ItemMenu icon='files' label='Archivos del proyecto' navigateUrl={`/${PrivateDashboardRoutes.DRIVEBOARD}/${project}/${uid}`} />
            <ItemMenu icon='lista' label='Lista global de tareas' navigateUrl={`/${PrivateDashboardRoutes.TASKLIST}/${project}/${uid}`} />
            <ItemMenu icon='reporte' label='Reporte Diario' navigateUrl={`/${PrivateDashboardRoutes.DAILYREPORT}/${project}/${uid}`} />
            <ItemMenu icon='estadisticas' label='Estadisticas' navigateUrl={`/${PrivateDashboardRoutes.STATICS}/${project}/${uid}`} />
            <ItemMenu icon='revision' label='Revisión y Retrospectiva de fases' navigateUrl={`/${PrivateDashboardRoutes.PHASESREVIEW}/${project}/${uid}`} />
            <ItemMenu icon='equipo' label='Equipo y roles' navigateUrl={`/${PrivateDashboardRoutes.TEAM}/${project}/${uid}`} />
            <ItemMenu icon='chat' label='Chat' navigateUrl={`/${PrivateDashboardRoutes.CHAT}/${project}/${uid}`} />
            <div className="foot-menu-container">
                <ItemMenu icon='help' label='Ayuda' navigateUrl={`/${PrivateDashboardRoutes.HELP}/${project}/${uid}`} />
                <ItemMenu icon='settings' label='Configuración' navigateUrl={`/${PrivateDashboardRoutes.SETTINGS}/${project}/${uid}`} />
            </div>
        </div>
    );
}

export default SideMenu;

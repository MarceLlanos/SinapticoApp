
import React from 'react';
import { DashboardFrameContainer } from '../../components';

import './style/index.css';
import { InformationBody } from '@/pages/CoverPage/components';

interface IDashboardPageProps {

}

const DashboardPage: React.FC<IDashboardPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <div className="informationContainer dashboardPageContainer mt-3">
                <div className="informationImages">
                    <img
                        src='../src/assets/images/outlined.svg'
                        height={216}
                        width={246}
				    />
                </div>
                <div className="bodyInfo textLight primaryText mt-3">
                    <p>
                        Hola <strong>Eric Jordan!</strong>, tu eres el encargado del proyecto,
                        <br/>
                        te recordamos que estas son tus funciones:
                    </p>
                    <ul className='leftTextAlign'>
                        <li>Crear el repositorio en Google Drive.</li>
                        <li>Crear los documentos necesarios para el proyecto en el.</li>
                        <li>Agregar a miembros a tu equipo. </li>
                        <li>Verificar que las actividades del equipo como ser: Reportes <br/>
                            diarios, usar tablero de tareas correctamente, revision y <br/>
                            retrospectiva de fases , se realicen con normalidad.
                        </li>
                        <li>Coordinar y supervisar las fases y tareas del proyecto.</li>
                        <li>Coadyuvar en la comunicación entre miembros del equipo.  </li>

                    </ul>
                </div>
            </div>
        </DashboardFrameContainer>
    );
}

export default DashboardPage;
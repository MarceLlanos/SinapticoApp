
import React from 'react';
import './style/teamList.css';
import { CardButtonProject, HeadFormTitle, SideImageFrame } from '../../components';


interface ITeamListPageProps {

}

const TeamListPage: React.FC<ITeamListPageProps> = (props) => {
    return (
        <SideImageFrame image='Evaluacion-proyectos.png'>
            <HeadFormTitle title='Tus equipos' />
            <h3 className='textLight greyDarkText mt-1'>Selecciona un equipo para trabajar</h3>
            <div className="listContainer mt-3">
                <CardButtonProject
                    materia='Telematica'
                    proyecto='gestion de telematica de impuesto de prueba'
                />
                <CardButtonProject
                    materia='Telematica'
                    proyecto='gestion de telematica de impuesto de prueba'
                />
                <CardButtonProject
                    materia='Telematica'
                    proyecto='gestion de telematica de impuesto de prueba'
                />
                <CardButtonProject
                    materia='Telematica'
                    proyecto='gestion de telematica de impuesto de prueba'
                />
                 <CardButtonProject
                    materia='Telematica'
                    proyecto='gestion de telematica de impuesto de prueba'
                />
            </div>
        </SideImageFrame>
    );
}

export default TeamListPage;

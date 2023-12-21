
import React, { useEffect, useState } from 'react';
import './style/index.css';
import { SideMenu } from '../SideMenu';
import { AppBar } from '../AppBar';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { useParams } from 'react-router-dom';
import { getMemberTeam } from '@/redux/asyncState/team.async';


interface IDashboardFrameContainerProps {
    children: JSX.Element[] | JSX.Element;
}

const DashboardFrameContainer: React.FC<IDashboardFrameContainerProps> = ({ children }) => {
     const dispatch = useDispatch<AppDispatch>();
    const { project, uid } = useParams();
    const [photoUrl, setPhotoImage] = useState<string>('');
    const [user, setUser] = useState<string>('');

    useEffect(() => {
    const fetchData = async () => {
        try {
        const { userName, photoUrl } = await dispatch(
          getMemberTeam({
            id_project: project!,
            user_id: uid!
          })).unwrap();

        setPhotoImage(photoUrl!);
        setUser(userName);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
    }, []);

    return (
        <div className='dashboardContainer'>
            <SideMenu />
            <div className="rightContainerFrame">
                <AppBar/>
                <div className="frameContentContainer">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
}

export default DashboardFrameContainer;

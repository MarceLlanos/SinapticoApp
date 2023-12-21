
import React, { useEffect, useState } from 'react';

import { IconBadgeButton, InputSearch, UserAccountMenu } from './components';
import './style/index.css';
import { useParams } from 'react-router-dom';
import { getMemberTeam } from '@/redux/asyncState/team.async';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';

interface IAppBarProps {}

const AppBar: React.FC<IAppBarProps> = () => {
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
        <div className="appBarContainer">
            <div className="leftContainer">
                <InputSearch />
            </div>
            <div className="rightContainer">
                <IconBadgeButton />
                <UserAccountMenu userName={ user } photoUrl={ photoUrl } />
            </div>
        </div>
    );
}

export default AppBar;

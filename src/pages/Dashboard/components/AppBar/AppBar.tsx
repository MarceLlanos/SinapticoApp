
import React, { useEffect, useState } from 'react';

import { IconBadgeButton, InputSearch, UserAccountMenu } from './components';
import './style/index.css';
import { useParams } from 'react-router-dom';
import { getMemberTeam } from '@/redux/asyncState/team.async';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { MemberInput, UserTeam } from '@/models';

interface IAppBarProps {}

const AppBar: React.FC<IAppBarProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { project, uid } = useParams();
  const [photoUrl, setPhotoImage] = useState<string>('');
  const [user, setUser] = useState<string>('');

  const userData = async (dataInput: MemberInput) => {
    try {
      const user: UserTeam= await dispatch( getMemberTeam(dataInput) ).unwrap();
      console.log(user);
      setPhotoImage(user.photoUrl || '');
      setUser(user.userName);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    userData({ id_project: project!, uid: uid! });
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

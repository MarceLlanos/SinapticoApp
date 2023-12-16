
import React, { useEffect, useState } from 'react';

import { IconBadgeButton, InputSearch, UserAccountMenu } from './components';
import './style/index.css';
import { getCurrentUser, getUser } from '@/services';
import { UserGoogle } from '@/models';

interface IAppBarProps {}


const AppBar: React.FC<IAppBarProps> = (props) => {
    const currentUser = getCurrentUser();
    const [userLogged, setUserLogged] = useState<UserGoogle>();
    
    useEffect(() => {
        async () => {
            const user = await getUser(currentUser?.uid!)
            setUserLogged(user)
        };
    }, []);

    return (
        <div className="appBarContainer">
            <div className="leftContainer">
                <InputSearch />
            </div>
            <div className="rightContainer">
                <IconBadgeButton />
                <UserAccountMenu
                    urlImage={userLogged?.photoUrl!}
                    userName={userLogged?.userName!}
                />
            </div>
        </div>
    );
}

export default AppBar;

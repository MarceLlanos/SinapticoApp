import React, { MouseEvent, useState } from "react";
import { Avatar, Menu, MenuItem, Typography, styled } from "@mui/material";

import "./style/index.css";

interface IUserAccountMenuProps {
  urlImage: string;
  userName: string;
}

export function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      fontWeight: "100",
      fontSize: "1.2rem"
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
  };
}

const CustomAvatar = styled(Avatar)({
  width: 34,
  height: 34
});

const UserAccountMenu: React.FC<IUserAccountMenuProps> = ({
  urlImage,
  userName
}) => {
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const settings = ["Perfil", "Salir"];

  const handleUserOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget);
  };
  const handleUserCloseMenu = () => {
    setUserMenu(null);
  };

  const renderUserMenu = (
    <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={userMenu}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
            vertical: "top",
            horizontal: "right"
        }}
        open={Boolean(userMenu)}
        onClose={handleUserCloseMenu}
    >
        {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleUserCloseMenu}>
                <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
        ))}
    </Menu>
  );

  return (
    <>
        <div
          onClick={handleUserOpenMenu}
          className="user-container ml-1"
        >
            <p className="textLight greyText mr-1 mt-1">{userName}</p>
            {urlImage.length === 0 ? (
                <CustomAvatar {...stringAvatar(userName)} />
            ) : (
                <CustomAvatar alt={userName} src={urlImage} />
            )}
        </div>
        { renderUserMenu }
    </>
  );
};

export default UserAccountMenu;

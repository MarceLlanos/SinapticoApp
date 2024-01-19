
import React from 'react';
import { Avatar, styled } from '@mui/material';


interface IImageInitialGeneratorProps {
    userName: string
}

export function stringToColor(userName: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < userName.length; i += 1) {
        hash = userName.charCodeAt(i) + ((hash << 5) - hash);
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
            fontSize: "1.2rem",
            textAlign: "center",
            textBaseline: 'middle',
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
    };
}

const CustomAvatar = styled(Avatar)({
    width: 34,
    height: 34
});

const ImageInitialGenerator: React.FC<IImageInitialGeneratorProps>  = ({ userName }) => {
    // const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // useEffect(() => {
    //     if (canvasRef.current) {
    //         const context = canvasRef.current.getContext('2d');
    //         if (context) {
    //             const canvasSize = 100;
    //             canvasRef.current.width = canvasSize;
    //             canvasRef.current.height = canvasSize;
    //             context.fillRect(0, 0, canvasSize, canvasSize);

    //             context.fillStyle = stringToColor(userName);
    //             context.font = 'bold 2rem Roboto';
    //             context.fillStyle = 'white';
    //             context.textAlign = 'center';
    //             context.textBaseline = 'middle';

    //             context.fillText(userName.slice(0, 2).toUpperCase(), canvasSize / 2, canvasSize / 2);
    //         }
    //     }
    
    // }, [userName])

    return (
        <CustomAvatar
            sx={stringAvatar(userName).sx}
        >
            {stringAvatar(userName).children}
        </CustomAvatar>
    );
}

export default ImageInitialGenerator;
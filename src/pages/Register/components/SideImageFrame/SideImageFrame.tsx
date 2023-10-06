
import React from 'react';
import './style/index.css';
import { SinapticoImagotipo } from '@/styled-components';

interface ISideImageFrameProps {
    children: JSX.Element[] | JSX.Element;
    image: string
}

const SideImageFrame: React.FC<ISideImageFrameProps> = ({ children, image }) => {
    console.log(image);
    return (
        <div className='sideContainer'>
            <div className='sideContainerItem mt-1'>
                <header>
                    <SinapticoImagotipo
                        src={`../src/assets/images/imagotipo-sinaptico.svg`}
                        alt='Logo Sinaptico'
                    />
                </header>
                {
                    children
                }
            </div>
            <div className="sideImageContainerItem">
                <img src={`../src/assets/images/${image}`} className='image'/>
            </div>
        </div>
    );
}

export default SideImageFrame;

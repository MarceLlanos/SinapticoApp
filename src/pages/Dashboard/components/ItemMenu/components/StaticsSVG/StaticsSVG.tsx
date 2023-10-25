
import React from 'react';


interface IStaticsSVGProps {
    className: string
}

const StaticsSVG: React.FC<IStaticsSVGProps> = ({className}) => {
    return (
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M11.7262 12.2748C11.6886 12.2373 11.6577 12.1905 11.6369 12.1404C11.6143 12.0861 11.6035 12.0327 11.6035 11.9792V2.41856C11.6035 2.30166 11.5542 2.19059 11.4682 2.11043C11.3822 2.03109 11.2619 1.98851 11.15 2.0027C6.01926 2.44529 2 6.82854 2 11.9792C2 17.5057 6.49525 22 12.021 22C14.3718 22 16.659 21.1666 18.462 19.6526C18.5513 19.5766 18.6056 19.4672 18.6106 19.3512C18.6157 19.2334 18.5714 19.1199 18.4887 19.038L11.7262 12.2748Z" 
                className={className}
            />
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M13.0286 11.5608H21.7552C21.8721 11.5608 21.984 11.5115 22.0625 11.4255C22.1418 11.3395 22.1811 11.2242 22.1711 11.1073C21.751 6.25059 17.9213 2.42098 13.0645 2.00178C12.9517 1.99092 12.8323 2.03017 12.7463 2.1095C12.6603 2.18883 12.611 2.2999 12.611 2.41764V11.1432C12.611 11.3737 12.7981 11.5608 13.0286 11.5608Z" 
                className={className}
            />
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M21.7545 12.396H14.2095C14.0408 12.396 13.888 12.4979 13.8237 12.654C13.7585 12.8094 13.7944 12.9889 13.9139 13.1091L19.2509 18.4452C19.3294 18.5245 19.4363 18.568 19.5465 18.568H19.564C19.6818 18.5629 19.7912 18.5078 19.8663 18.4193C21.1958 16.836 21.9933 14.9104 22.1703 12.8494C22.1803 12.7325 22.1411 12.6173 22.0626 12.5313C21.9833 12.4453 21.8714 12.396 21.7545 12.396Z" 
                className={className}
            />
        </svg>
    );
}

export default StaticsSVG;
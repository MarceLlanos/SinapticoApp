
import React from 'react';

interface IReviewSVGProps {
    className: string
}

const ReviewSVG: React.FC<IReviewSVGProps> = ({className}) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.95984 13C2.95984 7.475 7.45281 3 13 3C18.5472 3 23.0401 7.475 23.0401 13C23.0401 18.525 18.5472 23 13 23C7.45281 23 2.95984 18.525 2.95984 13ZM19.8271 9.2502L18.0199 7.4502L11.7448 13.7002L9.23476 11.2002L7.42753 13.0002L11.7448 17.3002L19.8271 9.2502Z"
                className={className}
            />
        </svg>
    );
}

export default ReviewSVG;

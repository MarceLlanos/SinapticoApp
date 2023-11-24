import styled from 'styled-components';

export const CoverPageContainer = styled.div`
	background-image: url('./src/assets/images/dashboard-bg.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-color: var(--white-text);
	bottom: 0;
	heigth: calc(100dvh);
	position: fixed;
	top: 0;
	width: calc(100dvw);
	z-index: 1;
`;

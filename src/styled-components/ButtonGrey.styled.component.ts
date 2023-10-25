import styled from 'styled-components';

export const ButtonGrey = styled.button`
	background-color: transparent;
	border: 1px solid var(--grey-text);
	border-radius: 3px;
	color: var(--grey-text);
	font-size: 1.3rem;
	font-weight: 100;
	min-width: 192px;
	padding: 10px;
	position: relative;
	transition: ease-out 0.5s;
	-webkit-transition: ease-out 0.5s;
	-moz-transition: ease-out 0.5s;

	&::after,
	&::before {
		border-radius: 3px;
		content: '';
		height: 0%;
		position: absolute;
		width: 0%;
		visibility: hidden;
	}

	&::after {
		bottom: -1px;
		right: 0px;
		border-left: 1px solid var(--primary-text);
		border-bottom: 1px solid var(--primary-text);
		transition: width 0.1s ease 0.3s, height 0.1s ease, visibility 0s 0.2s;
	}

	&::before {
		top: -1px;
		left: 0px;
		border-top: 1px solid var(--primary-text);
		border-right: 1px solid var(--primary-text);
		transition: width 0.1s ease 0.3s, height 0.1s ease 0.2s, visibility 0s 0.4s;
	}

	&:hover {
		animation: pulse 2s ease-out 0.4s;
		color: var(--grey-text);
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	}

	&:hover::after,
	&:hover::before {
		width: calc(100%);
		height: calc(100%);
		visibility: visible;
		transition: width 0.1s ease 0.2s, height 0.1s ease 0.3s, visibility 0s 0.2s;
	}
`;

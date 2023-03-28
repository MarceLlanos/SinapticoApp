import styled from 'styled-components';

export const LinkPrimary = styled.a`
	color: var(--primary-text);
	font-size: 1.09rem;
	font-weight: 200;
	height: 20px;
	margin: 5px 0 0 25px;
	padding: 0;
	position: relative;
	:hover {
		cursor: pointer;
		color: var(--primary-text);
	}

	::after {
		background-color: var(--primary-text);
		bottom: 0;
		content: '';
		height: 1px;
		left: 0;
		position: absolute;
		width: 100%;

		transform: scaleX(0);
		transform-origin: right;
		transition: transform 350ms ease-in-out;
	}

	:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}
`;

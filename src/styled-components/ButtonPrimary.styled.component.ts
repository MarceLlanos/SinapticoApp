import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    background-color: ${({ disabled }) => disabled ? 'var(--grey-text)' : 'var(--primary-text)'};
    border: 1px solid ${({ disabled }) => disabled ? 'var(--grey-text)' : 'var(--primary-text)'};
    border-radius: 3px;
    color: var(--white-text);
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 100;
    padding: 10px 45px;
    width: auto;
    cursor: ${({ disabled }) => disabled ? 'not allowed' : 'pointer'}
    heigth: auto;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: box-shadow 350ms ease-out;
    }
`;

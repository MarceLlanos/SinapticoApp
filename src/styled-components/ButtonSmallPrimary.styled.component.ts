import styled from "styled-components";

export const ButtonSmallPrimary = styled.button`
    align-items: center;
    background-color: var(--primary-text);
    border: 1px solid var(--primary-text);
    border-radius: 3px;
    color: var(--white-text);
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    padding: 8px 12px;

    :hover {
        background-color: #2A54D3;
        border: 1px solid #2A54D3;
        transition: background-color 350ms ease-out;
    }
`;
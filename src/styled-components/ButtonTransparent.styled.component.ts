import styled from "styled-components";

export const ButtonTransparent = styled.button`
    background-color: transparent;
    border: 1px solid var(--white-text);
    border-radius: 7px;
    cursor: pointer;
    color: var(--white-text);
    display: inline-block;
    font-size: 1.500em;
    height: 2.3em;
    margin: 1em;
    position: relative;
    transition: ease-out 0.5s;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;
    width: 15em;

    z-index: 1;

    &::after,
    &::before {
        border-radius: 7px;
        content: "";
        height: 0%;
        position: absolute;
        width: 0%;
        visibility: hidden;
    }

    &::after {
        bottom: -1px;
        right: -1px;
        border-left: 2px solid var(--primary-text);
        border-bottom: 2px solid var(--primary-text);
        transition: width .2s ease .1s, height .1s ease, visibility 0s .2s;
    }

    &::before {
        top: -1px;
        left: -1px;
        border-top: 2px solid var(--primary-text);
        border-right: 2px solid var(--primary-text);
        transition: width .2s ease .3s, height .1s ease .2s, visibility 0s .4s;
    }

    &:hover{
        animation: pulse 2s ease-out .4s;
        color: var(--white-text);
    }

    &:hover::after,
    &:hover::before {
        width: calc(100%);
        height: calc(100% );
        visibility: visible;
        transition: width .1s ease .2s, height .1s ease .3s, visibility 0s .2s;
    }

    &:hover::after {
        transition: width .1s ease .2s, height .1s ease .3s, visibility 0s .2s;
    }

    &:hover::before {
        transition: width .1s ease, height .1s ease .1s;
    }
`;
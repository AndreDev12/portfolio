import styled from "styled-components";

export const Header = styled.header`
    height: 100vh;
    width: 100%;
`;

export const Nav = styled.nav`
    width: 100%;
    background-color: ${props => props.theme.colors.persianIndigo};
    height: 5rem;
    padding: 1rem;
    div{
        display: flex;
        height: 100%;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        max-width: 110rem;
    }
`;

export const Logo = styled.div`
    width: 12rem;
    height: 3rem;
`;
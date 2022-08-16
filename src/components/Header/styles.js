import styled from "styled-components";

export const Header = styled.header`
    height: 100vh;
    width: 100%;
`;

export const Nav = styled.nav`
    width: 100%;
    background-color: ${props => props.theme.colors.purpleLight};
    height: 5rem;
    padding: 1rem;
    div{
        display: flex;
        height: 100%;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
`;

export const Logo = styled.div`
    width: 12rem;
    height: 3rem;
`;

export const MenuButton = styled.div`
    width: 4rem;
    height: 100%;
`;
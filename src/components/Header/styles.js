import styled from "styled-components";

export const Header = styled.header`
    height: 100vh;
    width: 100%;
    > div{
        width: 100%;
        background-color: ${({theme}) => theme.colors.purpleLight};
        height: 5rem;
        padding: 1rem;
        div{
            display: flex;
            height: 100%;
            justify-content: space-between;
            width: 100%;
        }
    }
`;

export const Logo = styled.div`
    min-height: 3rem;
    display: block;
    flex-basis: 15rem;
    a{
        width: 100%;
        display: flex;
        height: 100%;
    }
`;

export const MenuButton = styled.div`
    flex-basis: 3rem;
    height: 100%;
`;

export const Nav = styled.nav`
    background-color: ${({theme}) => theme.colors.purple};
    height: calc(100vh - 5rem);
    display: flex;
    flex-direction: column;
    max-width: 25rem;
    position: fixed;
    right: 0;
    top: 5rem;
    transform: ${({toggle}) => toggle ? "translateX(0%)" : "translateX(100%)"};
    transition: all .3s;
    width: ${({toggle}) => toggle ? "100%" : "0%"};
`;
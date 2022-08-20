import styled from "styled-components";

export const ContainerHeader = styled.header`
    /* height: 100vh; */
    width: 100%;
    position: fixed;
    z-index: 20;
    > div{
        width: 100%;
        background-color: ${({theme}) => theme.colors.purple};
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
    background-color: ${({theme}) => theme.colors.test5};
    height: calc(100vh - 5rem);
    max-width: 25rem;
    position: fixed;
    right: 0;
    top: 5rem;
    transform: ${({toggle}) => toggle ? "translateX(0%)" : "translateX(100%)"};
    transition: all .3s;
    width: ${({toggle}) => toggle ? "100%" : "0%"};
    li:not(:nth-child(1)){
        border-top: .1rem solid ${({theme}) => theme.colors.purple};
    }
    li{
        height: 5rem;
        position: relative;
        transition: padding-left .3s;
        width: 100%;
        &:hover{
            background-color: ${({theme}) => theme.colors.darkBlue};
            padding-left: 1rem;
        }
        a{
            font-size: ${({theme}) => theme.fonts.sizes.lg};
            color: ${({theme}) => theme.colors.white};
            width: 100%;
            display: inline-block;
            line-height: 5rem;
            margin-left: 1.5rem;
        }   
    }
`;
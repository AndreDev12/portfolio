import styled from 'styled-components';

export const HeaderContainer = styled.header`
    /* height: 100vh; */
    width: 100%;
    position: fixed;
    z-index: 20;
    background-color: ${({theme}) => theme.colors.purple};
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.darkPurple};
    > div{
        width: 100%;
        height: 5rem;
        /* padding: 1rem; */
        width: 90%;
        margin: 0 auto;
        max-width: 1400px;
        > div{
            display: flex;
            height: 100%;
            justify-content: space-between;
            width: 100%;
            align-items: center;
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
    height: 3rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        display: none;
    }
`;

export const Nav = styled.nav`
    @media(max-width: 767px){
        background-color: ${({theme}) => theme.colors.black};
        height: calc(100vh - 5rem);
        max-width: 25rem;
        position: fixed;
        right: 0;
        top: 5rem;
        transform: ${({toggle}) => toggle ? "translateX(0%)" : "translateX(100%)"};
        transition: all .3s;
        width: ${({toggle}) => toggle ? "100%" : "0%"};
        z-index: 10;
    }
    li:nth-child(1){
        border-top: .1rem solid ${({theme}) => theme.colors.darkPurple};
    }
    li:not(:nth-child(1)){
        border-top: .1rem solid ${({theme}) => theme.colors.purple};
    }
    ul{
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            display: flex;
        }
    }
`;

export const ListItem = styled.li`
    height: 5rem;
    position: relative;
    transition: padding-left .3s;
    width: 100%;
    &:hover{
        background-color: ${({theme}) => theme.colors.purple};
        padding-left: 1rem;
    }
        a{
            font-size: ${({theme}) => theme.fonts.sizes.md};
            color: ${({theme}) => theme.colors.white};
            width: 100%;
            display: inline-block;
            line-height: 5rem;
            margin-left: 1.5rem;
        }
`;
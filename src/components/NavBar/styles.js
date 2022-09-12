import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    z-index: 20;
    background-color: ${({theme}) => theme.colors.purple};
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.darkPurple};
    > div{
        width: 100%;
        height: 5rem;
        width: 95%;
        margin: 0 auto;
        max-width: 1200px;
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
`;

export const UnorderedList = styled.ul`
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        display: flex;
        justify-items: center;
    }
    li:nth-child(1){
        border-top: 0.1rem solid ${({theme}) => theme.colors.darkPurple};
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            border-top-width: 0;
        }
    }
    li:not(:nth-child(1)){
        border-top: 0.1rem solid ${({theme}) => theme.colors.purple};
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            border-top-width: 0;
        }
    }
`;

export const ListItem = styled.li`
    height: 5rem;
    position: relative;
    transition: padding-left .3s;
    width: 100%;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        margin-left: 3rem;
        letter-spacing: 0.08rem;
    }
    &:hover{
        background-color: ${({theme}) => theme.colors.purple};
        padding-left: 1rem;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            padding-left: 0;
        }
        a::before{
            transform: scale(1);
        }
    }
        a{
            font-size: ${({theme}) => theme.fonts.sizes.md};
            color: ${({theme}) => theme.colors.white};
            width: 100%;
            display: inline-block;
            line-height: 5rem;
            margin-left: 1.5rem;
            position: relative;
            @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
                font-size: 1.8rem;
                margin-left: 0;
            }
            &:hover{
                color: ${({theme}) => theme.colors.purpleLight};
            }
            &::before{
                @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
                    content: "";
                    width: 100%;
                    height: 0.2rem;
                    background-color: ${({theme}) => theme.colors.purpleLight};
                    position: absolute;
                    bottom: 1.4rem;
                    transition: transform 0.3s ease 0s;
                    transform: scale(0);
                }
            }
        }
`;
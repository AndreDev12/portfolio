import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: ${({theme}) => theme.colors.purple};
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.darkPurple};
    position: fixed;
    width: 100%;
    z-index: 20;
    > div{
        height: 5rem;
        margin: 0 auto;
        max-width: 1200px;
        width: 95%;
        > div{
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: space-between;
            width: 100%;
        }
    }
`;

export const Logo = styled.div`
    display: block;
    flex-basis: 15rem;
    a{
        display: flex;
        height: 100%;
        width: 100%;
    }
`;

export const MenuButton = styled.div`
    flex-basis: 3rem;
    height: 3rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        display: none;
    }
    &:hover.active span:nth-child(1){
        transform: translateY(0.6rem) rotate(45deg);
    }
    &:hover.active span:nth-child(2){
        opacity: 0;
    }
    &:hover.active span:nth-child(3){
        transform: translateY(-0.8rem) rotate(-45deg);
    }
`;

export const Span = styled.span`
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 3rem;
    display: block;
    height: 0.3rem;
    margin: 0.4rem auto;
    transition: all 0.3s ease-in-out;
    width: 2.3rem;
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
        align-items: center;
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
        height: 3rem;
        letter-spacing: 0.08rem;
        line-height: 3rem;
        margin-left: 3rem;
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
            color: ${({theme}) => theme.colors.white};
            display: inline-block;
            font-size: 1.6rem;
            line-height: 5rem;
            margin-left: 1.5rem;
            position: relative;
            width: 100%;
            @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
                font-size: 1.8rem;
                line-height: unset;
                margin-left: 0;
            }
            &:hover{
                @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
                    color: ${({theme}) => theme.colors.purpleLight};
                }
            }
            &::before{
                @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
                    background-color: ${({theme}) => theme.colors.purpleLight};
                    bottom: 0.2rem;
                    content: "";
                    height: 0.2rem;
                    position: absolute;
                    transform: scale(0);
                    transition: transform 0.3s ease 0s;
                    width: 100%;
                }
            }
        }
`;
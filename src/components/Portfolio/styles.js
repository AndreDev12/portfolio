import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    width: 100%;
`;

export const PortfolioDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 5rem;
    padding-top: 11rem; 
    width: 95%;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        padding-top: 13rem;
    }
    @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
        padding-bottom: 35rem;
    }
`;

export const ContentText = styled.div`
    h1{
        color: ${({theme}) => theme.colors.purple};
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-align: center;
        text-transform: uppercase;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 3rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 3.5rem;
            margin-bottom: 2rem;
        }
    }
    p{
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        margin: 0 0 3rem;
        text-align: center;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 2rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 2.2rem;
        }
    }
`;

export const Projects = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-auto-rows: 25rem;
    grid-template-columns: 1fr;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Card = styled.div`
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
    position: relative;
    transition: 0.4s ease-in-out;
    &:hover::before{
        opacity: 0.8;
    }
    &::before{
        border-radius: 0.5rem;
        box-shadow: inset 0 10rem 100rem 1rem ${({theme}) => theme.colors.blackBoxShadow};
        content: '';
        display: block;
        height: 100%;
        opacity: 0;
        position: absolute;
        transition: opacity .3s .2s;
        width: 100%;
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            border-radius: 1rem;
        }
    }
    &:hover div{
        opacity: 1;
    }
`;

export const ProjectImage = styled.img`
    border-radius: 0.5rem;
    height: 100%;
    @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
        border-radius: 1rem;
    }
`;

export const ProjectInfo = styled.div`
    display: flex;
    justify-content: space-between;
    left: 1rem;
    opacity: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: 0.5s ease-in-out;
`;

export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 1rem;
    position: relative;
    top: 16rem;
    h3{
        font-size: 1.4rem;
    }
    p{
        font-size: 1.3rem;
        margin: 0.5rem 0 0;
    }
`;

export const ProjectLinks = styled.div`
    display: flex;
    a:nth-child(1){
        margin-right: 1rem;
    }
    a{
        height: 2rem;
        transition: 0.25s ease-in-out;
    }
`;
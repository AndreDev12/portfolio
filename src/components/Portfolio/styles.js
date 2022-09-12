import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    width: 100%;
`;

export const PortfolioDiv = styled.div`
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 11rem; 
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        padding-top: 13rem;
    }
`;

export const ContentText = styled.div`
    h1{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 1rem;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 3rem;
        }
    }
    p{
        margin: 0 0 3rem;
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        text-align: center;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 2rem;
        }
    }
`;

export const Projects = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    grid-auto-rows: 25rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Card = styled.div`
    color: ${({theme}) => theme.colors.white};
    transition: 0.4s ease-in-out;
    cursor: pointer;
    position: relative;
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
    }
    &:hover div{
        opacity: 1;
    }
`;

export const ProjectImage = styled.img`
    border-radius: 0.5rem;
    height: 100%;
`;

export const ProjectInfo = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    transition: 0.5s ease-in-out;
`;

export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    top: 16rem;
    left: 1rem;
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
        transition: 0.25s ease-in-out;
        height: 2rem;
    }
`;
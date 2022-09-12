import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
`;

export const AboutDiv = styled.div`
    height: 70vh;
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 11rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        height: 56vh;
        padding-top: 13rem;
    }
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
        margin: 0 0 1rem;
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        text-align: justify;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 2rem;
        }
    }
`;

export const Skills = styled.div`
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    padding-block: 3rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        padding-bottom: 5rem;
    }
    h2{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 1rem;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 3rem;
        }
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

export const ListItem = styled.li`
    color: ${({theme}) => theme.colors.gray};
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        font-size: 2rem;
    }
    svg{
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            height: 7rem;
            width: 7rem;
        }
    }    
`;
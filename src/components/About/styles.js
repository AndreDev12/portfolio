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
    h1{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 1rem;
    }
    p{
        margin: 0 0 2rem;
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        text-align: justify;
    }
`;

export const Skills = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    padding-block: 3rem;
    h2{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 1rem;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
`;

export const ListItem = styled.li`
    color: ${({theme}) => theme.colors.gray};
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* svg{
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            width: 8rem;
            height: 8rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            width: 12rem;
            height: 12rem;
        }
    } */
`;
import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
`;

export const HomeDiv = styled.div`
    height: 100vh;
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 4rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        flex-direction: row;
        column-gap: 10rem;
    }
    > div{
        margin: 0 auto;
    }
`;

const bounce = keyframes`
    from{
        transform: translateY(0rem);
    }
  
    to{
        transform: translateY(-1rem);
    } 
`; 

export const Picture = styled.img`
    width: 15rem;
    border-radius: 50%;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        order: 1;
        width: 20rem;
    }
`;

export const NameContainer = styled.div`
    h2{
        font-size: ${({theme}) => theme.fonts.sizes.test1};
        color: ${({theme}) => theme.colors.purple};
        text-transform: uppercase;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 1.8rem;
        }
    }
    h1{
        font-size: ${({theme}) => theme.fonts.sizes.test4};
        color: ${({theme}) => theme.colors.white};
        text-transform: uppercase;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 4.2rem;
        }
    }
`;

export const Specialty = styled.div`
    margin-top: 2rem;
    h3{
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.white};
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 3rem;
        }
    }
    span{
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 3rem;
        } 
    }
`;

export const Paragraph = styled.p`
    margin-block: 2rem 0;
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fonts.sizes.test2};
    line-height: 1.3;
    text-align: justify;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        font-size: 2rem;
    } 
`;

export const AboutDiv = styled.div`
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    padding-bottom: 3rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        padding-bottom: 6rem;
    } 
`;

export const Presentation = styled.div`
    h4{
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

export const Contact = styled.div`
    h4{
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
        text-align: center;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 2rem;
        }
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    justify-content: space-evenly;
    svg{
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            height: 4rem;
            width: 4rem;
        }
    }
`;
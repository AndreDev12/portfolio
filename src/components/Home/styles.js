import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
`;

export const HomeDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    row-gap: 4rem;
    width: 95%;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        column-gap: 10rem;
        flex-direction: row;
    }
    @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
        column-gap: 20rem;
    }
    > div{
        margin: 0 auto;
    }
`;

export const Picture = styled.img`
    border-radius: 50%;
    width: 15rem;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        order: 1;
        width: 20rem;
    }
    @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
        width: 25rem;
    }
`;

export const NameContainer = styled.div`
    h2{
        color: ${({theme}) => theme.colors.purple};
        font-size: 1.6rem;
        text-transform: uppercase;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 1.8rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 2rem;
        }
    }
    h1{
        color: ${({theme}) => theme.colors.white};
        font-size: 3.7rem;
        text-transform: uppercase;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 4.2rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 4.7rem;
        }
    }
`;

export const Specialty = styled.div`
    margin-top: 2rem;
    h3{
        color: ${({theme}) => theme.colors.white};
        font-size: 2.5rem;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 3rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 3.5rem;
        }
    }
    span{
        color: ${({theme}) => theme.colors.purple};
        font-size: 2.5rem;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 3rem;
        } 
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 3.5rem;
        }
    }
`;

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.gray};
    font-size: 1.8rem;
    line-height: 1.3;
    margin-block: 2rem 0;
    text-align: justify;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        font-size: 2rem;
    } 
    @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
        font-size: 2.2rem;
    }
`;

export const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 3rem;
    row-gap: 4rem;
    width: 95%;
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        padding-bottom: 6rem;
    } 
`;

export const Presentation = styled.div`
    h4{
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
        }
    }
    p{
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        margin: 0 0 1rem;
        text-align: justify;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 2rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 2.2rem;
        }
    }
`;

export const Contact = styled.div`
    h4{
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
        }
    }
    p{
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        margin: 0 0 1rem;
        text-align: center;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 2rem;
        }
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            font-size: 2.2rem;
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
        @media(min-width: ${({theme}) => theme.breakpoints.desktop}){
            height: 5rem;
            width: 5rem;
        }
    }
`;
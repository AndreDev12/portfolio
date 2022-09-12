import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.colors.purple};
    padding: 1rem;
`;

export const FooterDiv = styled.div`
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    color: ${({theme}) => theme.colors.white};
    @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
        flex-wrap: nowrap;
        margin: 0;
        width: 100%;
        column-gap: 5rem;
    }
    &>*{
        width: 100%;
        padding-block: 1rem;
    }
`;

export const FooterInformation = styled.div`
    h5{
        font-size: 1.4rem;
        text-align: center;
        line-height: 1.2;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 1.6rem;
        }
    }
`;

export const Copyright = styled.div`
    h5{
        font-size: 1.4rem;
        text-align: center;
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            font-size: 1.6rem;
        }
    }
`;

export const FooterSocialNetwork = styled.div`
    display: flex;
    justify-content: space-evenly;
    svg{
        @media(min-width: ${({theme}) => theme.breakpoints.tablet}){
            height: 2.2rem;
            width: 2.2rem;
        }
    }
`;
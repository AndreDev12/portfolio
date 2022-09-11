import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.colors.purple};
    padding: 1rem;
    /* position: absolute; */
    /* left: 0; */
    /* right: 0; */
    /* height: 5rem; */
`;

export const FooterDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    color: ${({theme}) => theme.colors.white};
    /* padding-top: 11rem; */
    /* height: 70vh; */
    &>*{
        width: 100%;
        padding-block: 1rem;
        /* flex-shrink: 0; */
    }
`;

export const FooterInformation = styled.div`
    /* flex-shrink: 0; */
    /* text-align: center; */
    h5{
        font-size: 1.4rem;
        text-align: center;
        line-height: 1.2;
    }
`;

export const Copyright = styled.div`
    h5{
        font-size: 1.4rem;
        text-align: center;
    }
`;

export const FooterSocialNetwork = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
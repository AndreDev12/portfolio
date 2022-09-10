import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.colors.purple};
    position: absolute;
    left: 0;
    right: 0;
    height: 5rem;
    padding: 1rem;
`;

export const FooterDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    /* padding-top: 11rem; */
    /* height: 70vh; */
`;

export const FooterInformation = styled.div`
    width: 100%;
    flex-shrink: 0;
`;

export const Copyright = styled.div`
    width: 100%;
`;

export const SocialNetworks = styled.div`
    width: 100%;
`;
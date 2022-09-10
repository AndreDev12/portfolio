import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.colors.purple};
    position: absolute;
    left: 0;
    right: 0;
    padding: 1rem;
    /* height: 5rem; */
`;

export const FooterDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.gray};
    /* padding-top: 11rem; */
    /* height: 70vh; */
    &>*{
        flex-shrink: 0;
        max-width: 100%;
        width: 100%;
    }
`;

export const FooterInformation = styled.div`
    padding-block: 1rem;
    /* width: 100%;
    flex-shrink: 0; */
    /* text-align: center; */
    h5{
        font-size: 1.4rem;
        text-align: center;
        line-height: 1.2;
    }
`;

export const Copyright = styled.div`
    padding-block: 1rem;
    h5{
        font-size: 1.4rem;
        text-align: center;
    }
    /* width: 100%; */
`;

export const FooterSocialNetwork = styled.div`
    /* width: 100%; */
`;
import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    width: 100%;
`;

export const PortfolioDiv = styled.div`
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    padding-top: 11rem; 
    /* height: 80vh; */
    /* display: flex; */
`;

export const ContentText = styled.div`
    h1{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 2rem;
    }
    p{
        margin: 0 0 2rem;
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        text-align: center;
    }
`;
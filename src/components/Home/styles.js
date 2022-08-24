import styled from 'styled-components';

export const HomeContainer = styled.div`
    /* height: calc(100vh - 5rem); */
    position: absolute;
    top: 5rem;
    width: 100%;
    color: #fff;
`;

export const HomeDiv = styled.div`
    height: calc(100vh - 5.1rem);
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    align-items: center;
    h2{
        font-size: ${({theme}) => theme.fonts.sizes.md};
        color: ${({theme}) => theme.colors.purple};
    }
    h1{
        font-size: ${({theme}) => theme.fonts.sizes.test1};
        /* color: ${({theme}) => theme.colors.purple} */
    }
    span{
        font-size: ${({theme}) => theme.fonts.sizes.test1};
        color: ${({theme}) => theme.colors.purple}; 
    }
`;

export const AboutDiv = styled.div`
    height: 10rem;
`;
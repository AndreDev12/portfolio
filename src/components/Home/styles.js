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
        font-size: ${({theme}) => theme.fonts.sizes.test1};
        color: ${({theme}) => theme.colors.purple};
    }
    h1{
        font-size: ${({theme}) => theme.fonts.sizes.test4};
        /* color: ${({theme}) => theme.colors.purple} */
        /* font-weight: 400; */
    }
    h3{
        font-size: ${({theme}) => theme.fonts.sizes.test3};
    }
    span{
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple}; 
    }
    p{
        color: ${({theme}) => theme.colors.gray};
        font-size: ${({theme}) => theme.fonts.sizes.test2};
        line-height: 1.3;
    }
`;

export const AboutDiv = styled.div`
    height: 10rem;
`;
import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    /* position: absolute; */
    /* top: 5rem; */
    /* height: calc(100vh - 5rem); */
`;

export const HomeDiv = styled.div`
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    align-items: center;
    /* height: calc(100vh - 5.1rem); */
    > div{
        margin: 0 auto;
    }
`;

export const NameContainer = styled.div`
    h2{
        font-size: ${({theme}) => theme.fonts.sizes.test1};
        color: ${({theme}) => theme.colors.purple};
        text-transform: uppercase;
    }
    h1{
        font-size: ${({theme}) => theme.fonts.sizes.test4};
        color: ${({theme}) => theme.colors.white};
        text-transform: uppercase;
    }
`;

export const Specialty = styled.div`
    margin-top: 2rem;
    h3{
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.white};
    }
    span{
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple}; 
    }
`;

export const Paragraph = styled.p`
    margin-block: 2rem 0;
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fonts.sizes.test2};
    line-height: 1.3;
`;

export const AboutDiv = styled.div`
    /* height: 10rem; */
    color: #fff;
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
`;

export const PresentationDiv = styled.div`
    h4{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 4rem;
    }
    p{
        margin: 0 0 2rem;
    }
`;
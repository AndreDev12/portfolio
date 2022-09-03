import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
`;

export const HomeDiv = styled.div`
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;
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
    animation: ${bounce} 1s alternate infinite;
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
    text-align: justify;
`;

export const AboutDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    padding-bottom: 3rem;
`;

export const Presentation = styled.div`
    h4{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 5rem;
    }
    p{
        margin: 0 0 2rem;
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        text-align: justify;
    }
`;

export const Contact = styled.div`
    h4{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 1rem;
    }
    p{
        margin: 0 0 2rem;
        color: ${({theme}) => theme.colors.gray};
        font-size: 1.8rem;
        line-height: 1.3;
        text-align: center;
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
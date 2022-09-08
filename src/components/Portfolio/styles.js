import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    width: 100%;
`;

export const PortfolioDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    padding-top: 11rem; 
    display: flex;
    flex-direction: column;
    /* height: 60vh; */
    /* height: 100vh; */
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

export const Projects = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(25rem, auto);
    row-gap: 1rem;
`;

export const Card = styled.div`
    /* padding: 1rem; */
    /* background: var(--card-background); */
    color: ${({theme}) => theme.colors.white};
    /* border-radius: 0.5rem; */
    transition: 0.4s ease-in-out;
    border-radius: 0.5rem;
    cursor: pointer;
    position: relative;
    &:hover{
        /* box-shadow: inset 0 100px 1000px 10px rgba(0, 0, 0, 0.8); */
        z-index: 50;
        box-shadow: inset 0 10rem 100rem 1rem ${({theme}) => theme.colors.purple};
    }
    &:hover div{
        opacity: 1;
    }
    img{
        border-radius: 0.5rem;
        height: 100%;
        object-fit: cover;
    }
`;

export const ProjectInfo = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    transition: 0.5s ease-in-out;
`;

export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    top: 16rem;
    left: 1rem;
    h3{
        font-size: 1.4rem;
        /* color: ${({theme}) => theme.colors.purple}; */
    }
    p{
        font-size: 1.3rem;
        margin: 0.5rem 0 0;
        /* color: ${({theme}) => theme.colors.purple}; */
    }
`;

export const ProjectLinks = styled.div`
    a{
        color: #ffffff;
        transition: 0.25s ease-in-out;
        /* font-size: 1.1rem; */
        margin-right: 0.3rem;
    }
`;
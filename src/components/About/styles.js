import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
`;

export const AboutDiv = styled.div`
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    padding-top: 11rem;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    /* padding-top: 10rem; */
    h1{
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

export const Skills = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    h2{
        text-align: center;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fonts.sizes.test3};
        color: ${({theme}) => theme.colors.purple};
        margin-bottom: 5rem;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
`;

export const ListItem = styled.li`
    color: ${({theme}) => theme.colors.gray};
    font-size: 1.8rem;
    /* Cambiar el text-transform de las tecnologìas */
`;
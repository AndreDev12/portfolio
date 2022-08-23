import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    color: #ffffff;
    position: absolute;
    /* bottom: -5rem; */
    bottom: -15rem;
    left: 0;
    right: 0;
    background-color: ${({theme}) => theme.colors.purple};
    height: 5rem;
`;
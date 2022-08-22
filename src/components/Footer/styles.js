import styled from 'styled-components';

export const FooterDiv = styled.div`
    color: #ffffff;
    position: absolute;
    bottom: -5rem;
    left: 0;
    right: 0;
    background-color: ${({theme}) => theme.colors.purple};
    height: 5rem;
`;
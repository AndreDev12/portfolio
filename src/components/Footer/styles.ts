import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 1rem;
`;

export const FooterDiv = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    column-gap: 5rem;
    flex-wrap: nowrap;
    margin: 0;
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 auto;
  }
  & > * {
    padding-block: 1rem;
    width: 100%;
  }
`;

export const FooterInformation = styled.div`
  h5 {
    font-size: 1.4rem;
    line-height: 1.2;
    text-align: center;
  }
`;

export const Copyright = styled.div`
  h5 {
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const FooterSocialNetwork = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

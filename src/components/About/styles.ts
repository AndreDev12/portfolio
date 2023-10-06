import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
`;

export const AboutDiv = styled.div`
  height: 70vh;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 11rem;
  width: 95%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 56vh;
    padding-top: 13rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 40vh;
  }
  h1 {
    color: ${({ theme }) => theme.colors.purple};
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 3rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 3.5rem;
      margin-bottom: 2rem;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.8rem;
    line-height: 1.3;
    margin: 0 0 1rem;
    text-align: justify;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 2.2rem;
    }
  }
`;

export const Skills = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding-block: 3rem;
  width: 95%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: 35rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.purple};
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 3rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 3.5rem;
      margin-bottom: 2rem;
    }
  }
  ul {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const ListItem = styled.li`
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.2rem;
  }
  svg {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 7rem;
      width: 7rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      height: 8rem;
      width: 8rem;
    }
  }
`;

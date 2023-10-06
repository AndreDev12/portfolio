import { IconContext } from 'react-icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

import {
  Copyright,
  FooterContainer,
  FooterDiv,
  FooterInformation,
  FooterSocialNetwork,
} from './styles';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <FooterContainer>
        <FooterDiv>
          <FooterInformation>
            <h5>Designed and developed by Hector Andre</h5>
          </FooterInformation>
          <Copyright>
            <h5>Copyright © {year} AndreDev</h5>
          </Copyright>
          <FooterSocialNetwork>
            <a
              href="https://github.com/AndreDev12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub color="#F0F6FC" />
            </a>
            <a
              href="https://www.linkedin.com/in/h%C3%A9ctor-andr%C3%A9-huambachano-torres/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin color="#0A66C2" />
            </a>
            <a
              href="https://twitter.com/HectorAndreHT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color="#1D9BF0" />
            </a>
          </FooterSocialNetwork>
        </FooterDiv>
      </FooterContainer>
    </IconContext.Provider>
  );
};

export default Footer;

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

import { Copyright, FooterContainer, FooterDiv, FooterInformation, FooterSocialNetwork } from './styles';

const Footer = () => {
  const date = new Date();

  return (
    <FooterContainer>
      <FooterDiv>
        <FooterInformation>
          <h5>Designed and developed by Hector Andre</h5>
        </FooterInformation>
        <Copyright>
          <h5>Copyright © {date.getFullYear()} AndreDev</h5>
        </Copyright>
        <FooterSocialNetwork>
          <a 
            href="https://github.com/AndreDev12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub color="#f0f6fc" size="3rem" />
          </a>
          <a 
            href="https://www.linkedin.com/in/h%C3%A9ctor-andr%C3%A9-huambachano-torres/" target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin color="#0a66c2" size="3rem" />
          </a>
          <a 
            href="https://twitter.com/HectorAndreHT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="#1d9bf0" size="3rem" />
          </a>
        </FooterSocialNetwork>
      </FooterDiv>
    </FooterContainer>
  )
}

export default Footer;
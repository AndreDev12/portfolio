import { IconContext } from 'react-icons';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

import { HomeContainer, HomeDiv, AboutDiv, NameContainer, Specialty, Paragraph, Presentation, Contact, SocialNetworks, Picture } from './styles';
import profilePicture from '../../assets/img/profile picture.jpg';

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'a front-end developer',
        'a college student',
        'self-taught'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, []);

  return (
    <IconContext.Provider value={{ size: "3rem" }}>
      <HomeContainer>
        <HomeDiv>
          <Picture 
            src={profilePicture}
            alt="Profile picture" 
          />
          <div>
            <NameContainer>
              <h2>Hi, my name is</h2>
              <h1>Hector Andre</h1>
            </NameContainer>
            <Specialty>
              <h3>I'm</h3><span ref={el}></span>
            </Specialty>
            <Paragraph>I build web projects adapted to different devices. Currently, I focus on learning the Redux pattern.</Paragraph>
          </div>
        </HomeDiv>
        <AboutDiv>
          <Presentation>
            <h4>Let me introduce myself</h4>
            <p>I fell in love with programming when I was taking the web application development course at university, and that's when I made the decision to study front-end development technologies.</p>
            <p>I handle technologies such as Javascript, React and Styled-components.</p>
            <p>My field of interest is building front-end applications based on React.</p>
          </Presentation>
          <Contact>
            <h4>Find me on</h4>
            <p>Feel free to connect with me</p>
            <SocialNetworks>
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
            </SocialNetworks>
          </Contact>
        </AboutDiv>
      </HomeContainer>
    </IconContext.Provider>
  )
}

export default Home;
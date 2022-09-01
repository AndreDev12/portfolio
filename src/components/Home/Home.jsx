import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

import { HomeContainer, HomeDiv, AboutDiv, NameContainer, Specialty, Paragraph } from './styles';

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
    <HomeContainer>
      <HomeDiv>
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
        <div>
          <h4>Let me introduce myself</h4>
          <p>I fell in love with programming when I was taking the web application development course at university, and that's when I made the decision to study front-end development technologies.</p>
          <p>I handle technologies such as Javascript, React and styled-components.</p>
          <p>My field of interest is building front-end applications based on React.</p>
        </div>
        <div>
          <h4>Find me on</h4>
          <p>Feel free to connect with me</p>
          <div>
            <Link to="">
              <BsGithub color="#f0f6fc" size="3rem" />
            </Link>
            <Link to="">
              <BsLinkedin color="#0a66c2" size="3rem" />
            </Link>
            <Link to="">
              <FaTwitter color="#1d9bf0" size="3rem" />
            </Link>
          </div>
        </div>
      </AboutDiv>
    </HomeContainer>
  )
}

export default Home;
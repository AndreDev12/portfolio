import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { HomeContainer, HomeDiv, AboutDiv } from './styles';

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
          <div>
            <h2>Hi, my name is</h2>
            <h1>Hector Andre</h1>
          </div>
          <div>
            <h3>I'm</h3><span ref={el}></span>
          </div>
          <div>
            <p>I build web projects adapted to different resolutions. Currently, I focus on learning the Redux pattern.</p>
          </div>
        </div>
      </HomeDiv>
      <AboutDiv>About test</AboutDiv>
    </HomeContainer>
  )
}

export default Home;
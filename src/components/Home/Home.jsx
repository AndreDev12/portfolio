import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { HomeContainer, HomeDiv, AboutDiv } from './styles';

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'front-end developer',
        'college student',
        'self-taught'
      ],
      // startDelay: 300,
      // typeSpeed: 150,
      // backDelay: 150,
      // backSpeed: 150,
      // smartBackspace: true,
      // showCursor: false,
      // loop: true,
      typeSpeed: 50,
      backSpeed: 50,
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
            <h3>I'm a</h3><span ref={el}></span>
          </div>
          <div>
            <p>I build web projects adapted to different resolutions, currently I focus on learning the Redux pattern.</p>
          </div>
        </div>
      </HomeDiv>
      <AboutDiv>About test</AboutDiv>
    </HomeContainer>
  )
}

export default Home;
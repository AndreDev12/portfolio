import { FaHtml5, FaCss3Alt, FaSass, FaReact } from 'react-icons/fa';
import { SiJavascript, SiStyledcomponents } from  'react-icons/si';

import { AboutContainer, AboutDiv, ListItem, Skills } from './styles';

const About = () => {
  return (
    <AboutContainer>
      <AboutDiv>
        <h1>Do you know who I am?</h1>
        <p>Hello! My name is Héctor André, I am a university student who likes to improve myself professionally, I enjoy creating web applications and I love learning the English language.</p>
        <p>My interest in web development started when I was building a responsive design application on top of a portfolio made in HTML5, CSS, JavaScript and the SwiperJS library. Then I got really excited learning React, practicing it with Frontend Mentor challenges and reviewing other programmers' code on GitHub.</p>
      </AboutDiv>
      <Skills>
        <h2>Skills</h2>
        <ul>
          <ListItem><FaHtml5 color="#dd5237" size="6rem" />HTML5</ListItem>
          <ListItem><FaCss3Alt color="#2396f3" size="6rem" />CSS3</ListItem>
          <ListItem><SiJavascript color="#f7e038" size="6rem" />JavaScript</ListItem>
          <ListItem><FaSass color="#ca6598" size="6rem" />Sass</ListItem>
          <ListItem><FaReact color="#61dafb" size="6rem" />React</ListItem>
          <ListItem><SiStyledcomponents color="#ee3f86" size="6rem" />Styled components</ListItem>
        </ul>
      </Skills>
    </AboutContainer>
  )
}

export default About;
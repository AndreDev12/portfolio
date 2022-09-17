import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from 'react-icons/fa';
import { SiJavascript, SiStyledcomponents } from  'react-icons/si';

import { AboutContainer, AboutDiv, ListItem, Skills } from './styles';

const About = () => {
  return (
    <IconContext.Provider value={{ size: "6rem" }}>
      <AboutContainer>
        <AboutDiv>
          <h1>Do you know who I am?</h1>
          <p>Hello! My name is Hector Andre, I am a university student who likes to improve myself professionally, I enjoy creating web applications and I love learning the English language.</p>
          <p>My interest in web development started when I was building a responsive design application on top of a portfolio made in HTML5, CSS3, JavaScript and the SwiperJS library. Then I got really excited learning React, practicing it with Frontend Mentor challenges and reviewing other programmers' code on GitHub.</p>
        </AboutDiv>
        <Skills>
          <h2>Skills</h2>
          <ul>
            <ListItem><FaHtml5 color="#DD5237" />HTML5</ListItem>
            <ListItem><FaCss3Alt color="#2396F3" />CSS3</ListItem>
            <ListItem><SiJavascript color="#F7E038" />JavaScript</ListItem>
            <ListItem><FaSass color="#CA6598" />Sass</ListItem>
            <ListItem><FaReact color="#61DAFB" />React</ListItem>
            <ListItem><SiStyledcomponents color="#EE3F86" />Styled components</ListItem>
          </ul>
        </Skills>
      </AboutContainer>
    </IconContext.Provider>
  )
}

export default About;
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { ContentText, PortfolioContainer, PortfolioDiv, Projects } from "./styles";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioDiv>
        <ContentText>
          <h1>Recent works</h1>
          <p>Check out some projects I've built recently</p>
        </ContentText>
        <Projects>
          <div>
            <div>
              <div>
                <h3>Startup portfolio</h3>
                <p>HTML5, CSS3, JavaScript</p>
              </div>
              <div>
                <a 
                  href="https://github.com/AndreDev12/startup-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub color="#f0f6fc" size="3rem" />
                </a>
                <a
                  href="https://startup-portfolio-bice.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="#f0f6fc" size="3rem" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h3>Marvel characters</h3>
                <p>CSS3, JavaScript</p>
              </div>
              <div>
                <a 
                  href="https://github.com/AndreDev12/marvel-characters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub color="#f0f6fc" size="3rem" />
                </a>
                <a
                  href="https://marvel-characters-challenge.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="#f0f6fc" size="3rem" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h3>Intro section with dropdown navigation</h3>
                <p>JavaScript, Sass</p>
              </div>
              <div>
                <a 
                  href="https://github.com/AndreDev12/intro-section-with-dropdown-navigation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub color="#f0f6fc" size="3rem" />
                </a>
                <a
                  href="https://intro-section-with-dropdown-navigation-puce.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="#f0f6fc" size="3rem" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h3>Intro component with signup form</h3>
                <p>CSS3, React</p>
              </div>
              <div>
                <a 
                  href="https://github.com/AndreDev12/intro-component-with-signup-form"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub color="#f0f6fc" size="3rem" />
                </a>
                <a
                  href="https://intro-component-with-signup-form-mu-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="#f0f6fc" size="3rem" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h3>Ip address tracker</h3>
                <p>Sass, React</p>
              </div>
              <div>
                <a 
                  href="https://github.com/AndreDev12/ip-address-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub color="#f0f6fc" size="3rem" />
                </a>
                <a
                  href="https://ip-address-tracker-neon-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="#f0f6fc" size="3rem" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h3>Rest countries api with color theme switcher</h3>
                <p>Sass, React</p>
              </div>
              <div>
                <a 
                  href="https://github.com/AndreDev12/rest-countries-api-with-color-theme-switcher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub color="#f0f6fc" size="3rem" />
                </a>
                <a
                  href="https://rest-countries-api-with-color-theme-switcher-seven-theta.vercel.app/countries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="#f0f6fc" size="3rem" />
                </a>
              </div>
            </div>
          </div>
        </Projects>
      </PortfolioDiv>
    </PortfolioContainer>
  )
}

export default Portfolio;
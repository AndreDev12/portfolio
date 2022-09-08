import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { Card, ContentText, PortfolioContainer, PortfolioDiv, ProjectInfo, ProjectLinks, Projects, ProjectText } from './styles';
import imgStartupPortfolio from '../../assets/img/startup portfolio.png';
import imgMarvelCharacters from '../../assets/img/marvel characters.png';
import imgIntroSectionWithDropdownNavigation from '../../assets/img/intro section with dropdown navigation.png';
import imgIntroComponentWithSignupForm from '../../assets/img/intro component with sign up form.png';
import imgIpAddressTracker from '../../assets/img/ip address tracker.png';
import imgRestCountriesApiWithColorThemeSwitcher from '../../assets/img/rest countries api with color theme switcher.png';

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioDiv>
        <ContentText>
          <h1>Recent works</h1>
          <p>Check out some projects I've built recently</p>
        </ContentText>
        <Projects>
          <Card>
            <img 
              src={imgStartupPortfolio}
              alt="Startup portfolio image"
            />
            <ProjectInfo>
              <ProjectText>
                <h3>Startup portfolio</h3>
                <p>HTML5, CSS3, JavaScript</p>
              </ProjectText>
              <ProjectLinks>
                <a 
                  href="https://github.com/AndreDev12/startup-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub color="#f0f6fc" size="2rem" />
                </a>
                <a
                  href="https://startup-portfolio-bice.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="#f0f6fc" size="2rem" />
                </a>
              </ProjectLinks>
            </ProjectInfo>
          </Card>
          <Card>
            <img 
              src={imgMarvelCharacters}
              alt='Image of marvel characters'
            />
            <ProjectInfo>
              <ProjectText>
                <h3>Marvel characters</h3>
                <p>CSS3, JavaScript</p>
              </ProjectText>
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
            </ProjectInfo>
          </Card>
          <Card>
            <img 
              src={imgIntroSectionWithDropdownNavigation}
              alt='Image of intro section with dropdown navigation'
            />
            <ProjectInfo>
              <ProjectText>
                <h3>Intro section with dropdown navigation</h3>
                <p>JavaScript, Sass</p>
              </ProjectText>
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
            </ProjectInfo>
          </Card>
          <Card>
            <img 
              src={imgIntroComponentWithSignupForm}
              alt='Image of intro component with signup form'
            />
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
          </Card>
          <Card>
            <img 
              src={imgIpAddressTracker}
              alt='Image of ip address tracker'
            />
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
          </Card>
          <Card>
            <img 
              src={imgRestCountriesApiWithColorThemeSwitcher}
              alt='Image of rest countries api with color theme switcher'
            />
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
          </Card>
        </Projects>
      </PortfolioDiv>
    </PortfolioContainer>
  )
}

export default Portfolio;
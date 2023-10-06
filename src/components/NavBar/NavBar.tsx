import { IconContext } from 'react-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
  ListItem,
  Logo,
  MenuButton,
  Nav,
  Span,
  UnorderedList,
} from './styles';
import logo from '../../../public/logos/logo.svg';

const NavBar = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  return (
    <IconContext.Provider value={{ color: '#FFFFFF', size: '3rem' }}>
      <HeaderContainer>
        <div>
          <div>
            <Logo>
              <Link to="/">
                <img src={logo.src} alt="Portfolio logo" />
              </Link>
            </Logo>
            <MenuButton
              onClick={() => {
                setIsEnabled(!isEnabled);
              }}
              className={`${isEnabled} && 'active'`}
            >
              <Span></Span>
              <Span></Span>
              <Span></Span>
            </MenuButton>
            <Nav enabled={isEnabled ? 'open' : ''}>
              <UnorderedList>
                <ListItem>
                  <Link
                    to="/"
                    onClick={() => {
                      setIsEnabled(!isEnabled);
                    }}
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="about"
                    onClick={() => {
                      setIsEnabled(!isEnabled);
                    }}
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="portfolio"
                    onClick={() => {
                      setIsEnabled(!isEnabled);
                    }}
                  >
                    Portfolio
                  </Link>
                </ListItem>
              </UnorderedList>
            </Nav>
          </div>
        </div>
      </HeaderContainer>
    </IconContext.Provider>
  );
};

export default NavBar;

import { IconContext } from 'react-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, ListItem, Logo, MenuButton, Nav, Span, UnorderedList } from './styles';
import logo from '../../assets/logos/logo.svg';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <IconContext.Provider value={{ color:"#FFFFFF", size:"3rem" }}>
      <HeaderContainer>
        <div>
          <div>
            <Logo>
              <Link to="/">
                <img 
                  src={logo}
                  alt="Portfolio logo" 
                />
              </Link>
            </Logo>
            <MenuButton 
              onClick={() => setToggle(!toggle)}
              className= {toggle && "active"}
            >
              <Span></Span>
              <Span></Span>
              <Span></Span>
            </MenuButton>
            <Nav toggle={toggle}>
              <UnorderedList>
                <ListItem>
                  <Link 
                    to="/"
                    onClick={() => setToggle(!toggle)}
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link 
                    to="about"
                    onClick={() => setToggle(!toggle)}
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="portfolio"
                    onClick={() => setToggle(!toggle)}
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
  )
}

export default NavBar;
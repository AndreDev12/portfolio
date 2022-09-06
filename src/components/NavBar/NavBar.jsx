import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import { HeaderContainer, ListItem, Logo, MenuButton, Nav } from './styles';
import logo from '../../assets/logos/logo.svg';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <HeaderContainer>
      <div>
        <div>
          <Logo>
            <Link to="/">
              <img src={logo} alt="Portfolio logo" />
            </Link>
          </Logo>
          <MenuButton onClick={() => setToggle(!toggle)}>
            {
              toggle ? 
              <FaTimes color="#FFFFFF" size="3rem" /> :
              <FaBars color="#FFFFFF" size="3rem" />
            }
          </MenuButton>
          <Nav toggle={toggle}>
            <ul>
              <ListItem><Link to="/">Home</Link></ListItem>
              <ListItem><Link to="about">About</Link></ListItem>
              <ListItem><Link to="portfolio">Portfolio</Link></ListItem>
            </ul>
          </Nav>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default NavBar;
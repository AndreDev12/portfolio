import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Header, Logo, MenuButton, Nav } from './styles';
import logo from '../../assets/logos/logo.svg';

const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Header>
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
              <li><Link to="#about">About</Link></li>
              <li><Link to="#skills">Skills</Link></li>
              <li><Link to="#portfolio">Portfolio</Link></li>
            </ul>
          </Nav>
        </div>
      </div>
    </Header>
  )
}

export default Home
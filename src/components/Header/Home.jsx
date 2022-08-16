import { Link } from 'react-router-dom';

import { Header, Logo, MenuButton, Nav } from './styles';
import portfolioLogo from '../../assets/logos/logo.svg';

const Home = () => {
  return (
    <Header>
      <Nav>
        <div>
          <Logo>
            <Link to={"/"}>
              <img src={portfolioLogo} alt="Portfolio logo" />
            </Link>
          </Logo>
          <MenuButton>
          </MenuButton>
        </div>
      </Nav>
    </Header>
  )
}

export default Home
import { Link } from 'react-router-dom';

import { Header, Logo, Nav } from './styles';
import portfolioLogo from '../../assets/logos/Test logo 2.svg';

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
        </div>
      </Nav>
    </Header>
  )
}

export default Home
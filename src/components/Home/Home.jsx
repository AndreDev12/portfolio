import { HomeContainer, HomeDiv, AboutDiv } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <HomeDiv>
        <div>
          <div>
            <h2>Hi, my name is</h2>
            <h1>Hector Andre</h1>
          </div>
          <div>
            <h3>I'm a</h3><span>front-end developer, college student, and self-taught.</span>
          </div>
          <div>
            <p>I build web projects adapted to different resolutions, currently I focus on learning the Redux pattern.</p>
          </div>
        </div>
      </HomeDiv>
      <AboutDiv>About test</AboutDiv>
    </HomeContainer>
  )
}

export default Home;
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import RouteTest from './router/RouteTest';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouteTest />
    </ThemeProvider>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import AppRouter from './router/AppRouter';
import Main from './container/Main';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

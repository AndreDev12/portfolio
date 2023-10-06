import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/GlobalStyle';
import AppRouter from './router/AppRouter';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

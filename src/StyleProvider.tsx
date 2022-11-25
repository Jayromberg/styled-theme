import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStateContext from './GlobalStateContext';
import IChildren from './IChildren';

function StyleProvider({ children }: IChildren) {
  const { isDarkTheme } = useContext(GlobalStateContext);

  const darkColor = {
    background: '#44475a',
  };

  const brightColor = {
    background: '#f6eee0',
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkColor : brightColor}>
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;

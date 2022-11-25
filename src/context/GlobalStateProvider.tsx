import { useMemo, useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import IChildren from '../interfaces/IChildren';

function GlobalStateProvider({ children }: IChildren ) {
  const [isDarkTheme, changeBetweenThemes] = useState(false);

  const globalState = useMemo(() => ({
    isDarkTheme,
    changeBetweenThemes,
  }), [isDarkTheme]);

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;

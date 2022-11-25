import React, { createContext } from 'react';

interface IContext {
  isDarkTheme: boolean;
  changeBetweenThemes: React.Dispatch<React.SetStateAction<boolean>>,
}

const initialValue = {
  isDarkTheme: false,
  changeBetweenThemes: () => {},
}

const GlobalStateContext = createContext<IContext>(initialValue);

export default GlobalStateContext;

import { useContext } from 'react';
import Button from "./Button";
import GlobalStateContext from "./GlobalStateContext";

function Theme() {
  const { isDarkTheme, changeBetweenThemes } = useContext(GlobalStateContext);

  return (
    <div>
      <Button 
        onClick={() => changeBetweenThemes(!isDarkTheme) }
      >
        {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
      </Button>
    </div>
  )
}

export default Theme;

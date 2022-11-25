import GlobalStateProvider from "./GlobalStateProvider";
import GlobalStyle from "./GlobalStyle";
import StyleProvider from "./StyleProvider";
import Theme from './Theme';

function App() {
  return (
    <GlobalStateProvider>
      <StyleProvider>
        <GlobalStyle />
        <Theme/>
      </StyleProvider>
    </GlobalStateProvider>
  );
}

export default App;

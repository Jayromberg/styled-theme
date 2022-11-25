import GlobalStateProvider from "./context/GlobalStateProvider";
import GlobalStyle from "./ui/GlobalStyle";
import StyleProvider from "./ui/StyleProvider";
import Theme from './components/Theme';

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

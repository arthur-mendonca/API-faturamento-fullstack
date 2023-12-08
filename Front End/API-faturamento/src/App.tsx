import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/Poppins/poppins.css";
import "./fonts/Inter/Inter.css";
import "./fonts/Comfortaa/Comfortaa.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/styles/globalStyle";
import theme from "./global/styles/theme";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesMain />
      </ThemeProvider>
    </>
  );
}

export default App;

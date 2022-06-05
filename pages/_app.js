import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { StoreProvider } from "../utils/Store";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#fafafa;
  /* min-height:100vh; */
  padding: 0;
  margin-top:0;
  font-family:Verdana;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
export default MyApp;

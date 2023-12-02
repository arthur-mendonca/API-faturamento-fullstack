import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object,
h1, h2, h3, h4, h5, h6, p, a, del, img, 
b, u, i, ol, ul, li, form, label,article, 
aside, figure, footer, header, 
nav, section{

    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.poppins};
    
}

ol, ul {
    list-style: none;
}

button , a , select{
    cursor: pointer;
}

html {
    scroll-behavior: smooth;
}

  :root {
    --teal: ${(props) => props.theme.colors.teal};
    --teal-light: ${(props) => props.theme.colors.tealLight};
    --gold: ${(props) => props.theme.colors.gold};
    --gold-light: ${(props) => props.theme.colors.goldLight};
    --blue: ${(props) => props.theme.colors.blue};
    --black: ${(props) => props.theme.colors.black};
    --gray-dark: ${(props) => props.theme.colors.grayDark};
    --white: ${(props) => props.theme.colors.white};
    --gray-light: ${(props) => props.theme.colors.grayLight};
    --background: ${(props) => props.theme.colors.background};
    --gray: ${(props) => props.theme.colors.gray};
    --red: ${(props) => props.theme.colors.red};
    --red-light: ${(props) => props.theme.colors.redLight};
    --gray-medium: ${(props) => props.theme.colors.grayMedium};
    --border-radius: ${(props) => props.theme.borderRadius};
  }
  

  body {
    background-color: var(--background);
    color: var(--black);
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
  
  button {
    font-family: ${(props) => props.theme.fonts.poppins};
    border-radius: ${(props) => props.theme.buttonBorderRadius};
  }
  

`;

export default GlobalStyle;

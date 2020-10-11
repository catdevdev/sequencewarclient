import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
 @font-face {
   font-family: "Space Mono";
   font-weight: 400;
   src: url("fonts/SpaceMono-Regular.ttf");
 }
 @font-face {
   font-family: "Space Mono";
   font-weight: 700;
   src: url("fonts/SpaceMono-Bold.ttf");
 }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', sans-serif;
  }

  html {
    height:100%;
    font-family: 'Space Mono', sans-serif;

    font-size: 50px;
    color: #fff;
  }

  button, input {
    font-family: 'Space Mono', sans-serif;
    color: #fff;
  }
`;

export default GlobalStyle;

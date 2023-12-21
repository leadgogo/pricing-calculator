import React from 'react';
import 'src/assets/fonts/fonts.css';
import { createGlobalStyle } from 'styled-components';
import { antdOverwriteGlobalStyle } from 'src/theme/globals/antd-overwrite-global-syle';
import { LggThemeProvider } from 'src/components/providers/lgg-theme-provider';

const GlobalStyle = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: flex;
    color: #636e7b;
    font-family: "SailecRegular";
    font-size: 13px;
    line-height: 1.42857;
    margin: 0;

    > #root {
      display: flex;
      flex: 1;
    }
  }

  a, a:hover {
    color: #2d98da;
  }

  // Fix problem with fonts and select boxes in firefox
  // https://stackoverflow.com/questions/39884774/css-font-family-support-dropped-for-select-in-firefox
  select, option, optgroup {
    font: -moz-pull-down-menu;
  }

  h1, h2, h3, h4, h5, h6 {
    color: inherit
  }

  ${antdOverwriteGlobalStyle}
`;

const App = () => {
  return (
    <LggThemeProvider>
      <>
        <GlobalStyle />
      </>
    </LggThemeProvider>
  );
};

export default App;

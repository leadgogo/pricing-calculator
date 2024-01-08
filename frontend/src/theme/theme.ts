import { DefaultTheme } from 'styled-components';
import { keyframes } from 'styled-components';
import { colorPalette } from 'src/theme/color-palette';
import { fonts } from 'src/theme/fonts';
import { buttonsTheme } from 'src/theme/sub-themes/buttons-theme';
import { cardsTheme } from 'src/theme/sub-themes/cards-theme';
import { checkboxTheme } from 'src/theme/sub-themes/checkbox-theme';
import { inputsTheme } from 'src/theme/sub-themes/inputs-theme';

export const lggTheme: DefaultTheme = {
  breakpoints: {
    xs: '459px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  insets: {
    bottom: 0,
    top: 0,
  },
  font: fonts,
  colors: {
    ...colorPalette,
    overlayColor: colorPalette.lightGrey3,
    // TODO: Update structure once we have contextual properties
    base: {
      primary: '#75CFEC',
      global: '#2D98DA',
      accent: '#36C99A',
      carbonBlue: '#4B6882',
      darkCarbonBlue: '#353B50',
      lightBlueGrey: '#98A9BC',
      lightGrey1: '#F7F8F9',
      lightGrey2: '#F3F5F7',
    },
    complementary: {
      orange: '#FFB900',
      blue: '#1AAFD0',
      green: '#2ED47A',
      purple: '#6A67CE',
      pink: '#FE4D97',
    },
  },
  checkboxTheme,
  inputsTheme,
  cardsTheme,
  buttonsTheme,
  buttons: {
    colors: {
      primary: {
        default: {
          background: '#75CFEC',
          fontColor: '#FFFFFF',
        },
        hover: {
          background: '#83D4EE',
          fontColor: '#FFFFFF',
        },
        active: {
          background: '#6FC4E0',
          fontColor: '#FFFFFF',
        },
        disabled: {
          background: '#E5EBEF',
          fontColor: '#98A9BC',
        },
      },
      success: {
        default: {
          background: '#36C99A',
          fontColor: '#FFFFFF',
        },
        hover: {
          background: '#4BCFA4',
          fontColor: '#FFFFFF',
        },
        active: {
          background: '#33BF92',
          fontColor: '#FFFFFF',
        },
        disabled: {
          background: '#E5EBEF',
          fontColor: '#98A9BC',
        },
      },
      default: {
        default: {
          background: '#E9EEF2',
          fontColor: '#98A9BC',
        },
        hover: {
          background: '#98A9BC1F',
          fontColor: '#6F869B',
        },
        active: {
          background: '#E9EEF2',
          fontColor: '#57728a',
        },
        disabled: {
          background: '#E5EBEF',
          fontColor: 'rgba(152, 169, 188, 0.4)',
        },
      },
    },
  },
};

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

import { fonts } from 'src/theme/fonts';
import { colorPalette } from 'src/theme/color-palette';

export const checkboxTheme = {
  textStyle: `
    font-family: ${fonts.regular};
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: ${colorPalette.lightBlue};
  `,
  disabledTextStyle: `
    font-family: ${fonts.regular};
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: ${colorPalette.lightBlue050};
  `,
};

import { css } from 'styled-components';
import { fonts } from 'src/theme/fonts';
import { colorPalette } from 'src/theme/color-palette';

export const labelTextStyle = css`
  color: ${({ theme }) => theme.colors.raven};
  display: block;
  font-family: ${({ theme }) => theme.font.medium};
  font-size: 11px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  line-height: 13px;
  text-align: left;
`;

export const inputTextStyle = css`
  color: ${({ theme }) => theme.colors.smalt};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 15px;
  text-align: left;
`;

export const inputPlaceholderStyle = css`
  ${inputTextStyle};
  color: #98a9bcb3;
`;

export const inputBorder = css`
  border: solid 1px ${({ theme }) => theme.colors.koala};
  border-radius: 4px;
`;

export const inputFocusBorder = css`
  background: ${({ theme }) => theme.colors.white} 0 0 no-repeat padding-box;
  border: solid 1px ${({ theme }) => theme.colors.gogo};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gogo},
    0 3px 6px ${({ theme }) => theme.colors.flint};
`;

export const inputsTheme = {
  // Borders
  border: `border: solid 1px ${colorPalette.lightBlue025}`,
  focusBorder: `
      background: ${colorPalette.white} 0 0 no-repeat padding-box;
      border: solid 1px ${colorPalette.lightBlue025};
      box-shadow: 0 0 0 1px ${colorPalette.globalBlue}, 0 3px 6px ${colorPalette.lightBlue025};
  `,
  errorBorder: `
      border: solid 1px ${colorPalette.complementaryColor7};
      box-shadow: unset;
    `,
  // BG Color
  bgColor: colorPalette.white,
  disableBgColor: colorPalette.lightGrey2,
  // Text styles
  textStyle: `
      font-family: ${fonts.regular};
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.31;
      letter-spacing: normal;
      text-align: left;
      color: ${colorPalette.carbonBlue};
    `,
  textDisabledStyle: `
      font-family: ${fonts.regular};
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.31;
      letter-spacing: normal;
      text-align: left;
      color: ${colorPalette.lightBlue040};
    `,
  placeholderStyle: `
      font-family: ${fonts.regular};
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.31;
      letter-spacing: normal;
      text-align: left;
      color: ${colorPalette.lightBlue070};
    `,
  labelStyle: `
      font-family: ${fonts.medium};
      font-size: 11px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: normal;
      text-align: left;
      color: ${colorPalette.complementaryColor8};
    `,
  errorStyle: `
      font-family: ${fonts.regular};
      font-size: 10px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: normal;
      text-align: left;
      color: ${colorPalette.complementaryColor6};
    `,
  cursorColor: colorPalette.lightBlue,
};

import { fonts } from 'src/theme/fonts';
import { colorPalette } from 'src/theme/color-palette';

const primaryHover = `
  background-color: ${colorPalette.lightAccentBlue};
  box-shadow: 0 2px 4px 0 #66a5ba33;
  color: ${colorPalette.white};
`;

const accentHover = `
  background-color: ${colorPalette.lightAccentGreen};
  box-shadow: 0 2px 4px 0 #389c7a33;
`;

const primaryActive = `
  background-color: ${colorPalette.darkAccentBlue};
  box-shadow: 0 1px 2px 0 #5798ad33;
`;

const accentActive = `
  background-color: ${colorPalette.darkAccentGreen};
  box-shadow: 0 1px 2px 0 #268c6c33;
`;

const accentFab = `
  background-color: ${colorPalette.accentGreen};
  border-radius: 50%;

  &:hover {
    ${accentHover};
  }

  &:active {
    ${accentActive};
  }

  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const smallAccentFab = `
  ${accentFab};
  height: 30px;
  width: 30px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const bigAccentFab = `
  ${accentFab};
  height: 44px;
  width: 44px;
  box-shadow: 0 12px 20px 0 #8bd8bf38;

  svg {
    height: 18px;
    width: 18px;
  }
`;

// Rectangular buttons
const buttonBaseStyle = `
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: ${fonts.medium};
  font-size: 14px;
  height: 38px;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;

export const primaryDefaultColors = `
  background-color: ${colorPalette.accentBlue};
  color: ${colorPalette.white};
`;

const primaryStyle = `
    ${buttonBaseStyle};
    ${primaryDefaultColors};
`;

export const tertiaryDefaultColors = `
  background-color: ${colorPalette.lightGrey1};
  color: ${colorPalette.lightBlue};
`;

export const tertiaryStyle = `
    ${buttonBaseStyle};
    ${tertiaryDefaultColors};
    font-size: 14px;
`;

export const tertiaryHoverStyle = `
    background-color: #eff2f4;
    color: #6f869b;
`;

export const tertiaryActiveStyle = `
    background-color: ${colorPalette.lightGrey1};
    color: ${colorPalette.carbonBlue};
`;

export const buttonsTheme = {
  default: `${primaryStyle}`,
  hover: `${primaryHover}`,
  active: `${primaryActive}`,
};

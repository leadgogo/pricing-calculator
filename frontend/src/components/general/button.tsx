import React, { ComponentProps, memo } from 'react';
import styled, { css } from 'styled-components';
import {
  tertiaryHoverStyle,
  tertiaryStyle,
  tertiaryActiveStyle,
  tertiaryDefaultColors,
} from 'src/theme/sub-themes/buttons-theme';

type ButtonSize = 'regular' | 'small';
type ButtonVariant = 'primary' | 'cta' | 'ctaGhost' | 'default' | 'defaultGhost' | 'defaultWhite';

// `DefaultWhiteButton` appearance style
const defaultWhiteColors = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.flint};
  path {
    fill: ${({ theme }) => theme.colors.flint};
  }
`;

const defaultWhiteButtonStyle = css`
  ${defaultWhiteColors};
  &:focus {
    ${defaultWhiteColors};
  }
  &:hover {
    ${defaultWhiteColors};
    color: ${({ theme }) => theme.colors.steel};
    box-shadow: 0 2px 4px 0 #97a3ae1a;
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
  &:active {
    ${defaultWhiteColors};
    box-shadow: 0 1px 2px 0 #4b68821a;
    color: ${({ theme }) => theme.colors.steel};
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
  &:disabled {
    ${defaultWhiteColors};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.flint};
    cursor: not-allowed;
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
    span {
      opacity: 0.35;
    }
  }
`;

// `PrimaryButton` appearance style
const primaryColors = css`
  background-color: ${({ theme }) => theme.colors.monk};
  color: ${({ theme }) => theme.colors.white};
  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const primaryButtonStyle = css`
  ${primaryColors};
  &:focus {
    ${primaryColors};
  }
  &:hover {
    ${primaryColors};
    background-color: #83d4ee;
    box-shadow: 0 2px 4px 0 #66a5ba33;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:active {
    ${primaryColors};
    background-color: #6fc4e0;
    box-shadow: 0 1px 2px 0 #5798ad33;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:disabled {
    ${primaryColors};
    background-color: ${({ theme }) => theme.colors.porcelain};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.flint};
    cursor: not-allowed;
    span {
      opacity: 0.35;
    }
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
`;

const ctaColors = css`
  background-color: ${({ theme }) => theme.colors.cosmo};
  color: ${({ theme }) => theme.colors.white};
  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const ctaButtonStyle = css`
  ${ctaColors};
  &:focus {
    ${ctaColors};
  }
  &:hover {
    ${ctaColors};
    background-color: #4bcfa4;
    box-shadow: 0 2px 4px 0 #389c7a33;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:active {
    ${ctaColors};
    background-color: #33bf92;
    box-shadow: 0 1px 2px 0 #268c6c33;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:disabled {
    ${ctaColors};
    background-color: ${({ theme }) => theme.colors.porcelain};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.flint};
    cursor: not-allowed;
    span {
      opacity: 0.35;
    }
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
`;

const ctaGhostColors = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.cosmo};
  color: ${({ theme }) => theme.colors.smalt};
  path {
    fill: ${({ theme }) => theme.colors.smalt};
  }
`;

const ctaGhostButtonStyle = css`
  ${ctaGhostColors};
  &:focus {
    ${ctaGhostColors};
  }
  &:hover {
    ${ctaGhostColors};
    background-color: ${({ theme }) => theme.colors.secondaryMint10};
    border: 1px solid #73dab9;
    box-shadow: 0 2px 4px 0 #389c7a1a;
    color: ${({ theme }) => theme.colors.smalt};
    path {
      fill: ${({ theme }) => theme.colors.smalt};
    }
  }
  &:active {
    ${ctaGhostColors};
    background-color: ${({ theme }) => theme.colors.secondaryMint10};
    border: 1px solid #33bf92;
    box-shadow: 0 2px 4px 0 #268c6c33;
    color: ${({ theme }) => theme.colors.smalt};
    path {
      fill: ${({ theme }) => theme.colors.smalt};
    }
  }
  &:disabled {
    ${ctaGhostColors};
    background-color: ${({ theme }) => theme.colors.porcelain};
    border: 1px solid ${({ theme }) => theme.colors.koala};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.flint};
    cursor: not-allowed;
    span {
      opacity: 0.35;
    }
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
`;

// `DefaultButton` appearance style
const defaultColors = css`
  background-color: ${({ theme }) => theme.colors.porcelain};
  color: ${({ theme }) => theme.colors.flint};
  path {
    fill: ${({ theme }) => theme.colors.flint};
  }
`;

const defaultButtonStyle = css`
  ${defaultColors};
  &:focus {
    ${defaultColors};
  }
  &:hover {
    ${defaultColors};
    background-color: #f4f6f8;
    color: ${({ theme }) => theme.colors.steel};
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
  &:active {
    ${defaultColors};
    background-color: ${({ theme }) => theme.colors.koala};
    color: ${({ theme }) => theme.colors.steel};
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
  &:disabled {
    ${defaultColors};
    background-color: ${({ theme }) => theme.colors.porcelain};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.flint};
    cursor: not-allowed;
    span {
      opacity: 0.35;
    }
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
`;

// `DefaultGhostButton` appearance style
const defaultGhostColors = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.koala};
  color: ${({ theme }) => theme.colors.flint};
  path {
    fill: ${({ theme }) => theme.colors.flint};
  }
`;

const defaultGhostButtonStyle = css`
  ${defaultGhostColors};
  &:focus {
    ${defaultGhostColors};
  }
  &:hover {
    ${defaultGhostColors};
    background-color: ${({ theme }) => theme.colors.alabaster};
    border: 1px solid ${({ theme }) => theme.colors.koala};
    color: ${({ theme }) => theme.colors.steel};
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
  &:active {
    ${defaultGhostColors};
    background-color: ${({ theme }) => theme.colors.alabaster};
    border: 1px solid #e4e9ed;
    color: ${({ theme }) => theme.colors.steel};
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
  &:disabled {
    ${defaultGhostColors};
    background-color: ${({ theme }) => theme.colors.porcelain};
    border: 1px solid ${({ theme }) => theme.colors.koala};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.flint};
    cursor: not-allowed;
    span {
      opacity: 0.35;
    }
    path {
      fill: ${({ theme }) => theme.colors.flint};
    }
  }
`;

const isomorphicColorButtonStyles = css<{ variant: ButtonVariant }>`
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return primaryButtonStyle;
      case 'cta':
        return ctaButtonStyle;
      case 'ctaGhost':
        return ctaGhostButtonStyle;
      case 'default':
        return defaultButtonStyle;
      case 'defaultGhost':
        return defaultGhostButtonStyle;
      case 'defaultWhite':
        return defaultWhiteButtonStyle;
    }
  }}
`;

const buttonBaseStyle = css`
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: ${({ theme }) => theme.font.medium};
  font-size: 14px;
  height: 38px;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;

const secondaryDefaultColors = css`
  background-color: ${({ theme }) => theme.colors.cosmo};
  color: ${({ theme }) => theme.colors.white};
`;
const secondaryHoverColors = css`
  background-color: ${({ theme }) => theme.colors.lightAccentGreen};
  box-shadow: 0 2px 4px 0 #389c7a33;
`;
const secondaryActiveColors = css`
  background-color: ${({ theme }) => theme.colors.darkAccentGreen};
  box-shadow: 0 1px 2px 0 #268c6c33;
`;
const secondaryButtonStyle = css`
  ${buttonBaseStyle};
  ${secondaryDefaultColors};

  &:focus {
    ${secondaryDefaultColors};
  }

  &:hover {
    ${secondaryHoverColors};
  }

  &:active {
    ${secondaryActiveColors};
  }
`;
const tertiaryButtonStyle = css`
  ${tertiaryStyle};

  &:focus {
    ${tertiaryDefaultColors};
  }

  &:hover {
    ${tertiaryHoverStyle};
  }

  &:active {
    ${tertiaryActiveStyle};
  }
`;

const baseButtonStyles = css`
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: ${({ theme }) => theme.font.medium};
  justify-content: center;
  padding: 10px 15px;
`;

export const StyledBaseButton = styled.button<{
  variant: ButtonVariant;
}>`
  ${baseButtonStyles};
  ${isomorphicColorButtonStyles};
`;

const buttonBaseStyles = css<{ size: ButtonSize }>`
  ${baseButtonStyles};
  ${({ size }) => {
    switch (size) {
      case 'regular':
        return `
          font-size: 14px;
          height: 38px;
          line-height: 17px;
        `;
      case 'small':
        return `
          font-size: 12px;
          height: 34px;
          line-height: 16px;
        `;
    }
  }};
`;

export const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
  active?: boolean;
}>`
  ${buttonBaseStyles};
  ${isomorphicColorButtonStyles};
  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.gogo};
    `}
`;

const ButtonContent = styled.span`
  width: 100%;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  active?: boolean;
};

export const Button = memo<React.PropsWithChildren<ButtonProps>>(({ icon, children, variant, size, ...rest }) => {
  return (
    <StyledButton variant={variant || 'default'} size={size || 'regular'} {...rest}>
      {icon ? icon : null}
      <ButtonContent>{children}</ButtonContent>
    </StyledButton>
  );
});

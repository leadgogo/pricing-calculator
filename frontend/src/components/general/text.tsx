import styled, { CSSObject, DefaultTheme } from 'styled-components';

interface TextProps {
  readonly color?: string;
  readonly variant?: string;
  readonly theme: DefaultTheme;
}

type Variants = {
  [variant: string]: CSSObject;
};

const getVariants = (props: TextProps): Variants => ({
  bold: {
    fontWeight: 'bold',
    fontFamily: props.theme.font.bold,
  },
  h1: {
    fontSize: '48px',
    lineHeight: '1.17',
    letterSpacing: '-1.92px',
    textAlign: 'center',
    color: props.theme.colors.lightGrey,
    fontFamily: props.theme.font.bold,
  },
  h2: {
    fontSize: '28px',
    lineHeight: '1.21',
    letterSpacing: '-0.56px',
    textAlign: 'left',
    color: props.theme.colors.smalt,
    fontFamily: props.theme.font.bold,
  },
  h3: {
    fontSize: '22px',
    lineHeight: '1.55',
    letterSpacing: '-0.44px',
    textAlign: 'left',
    color: props.theme.colors.smalt,
    fontFamily: props.theme.font.bold,
  },
  h4: {
    fontSize: '20px',
    lineHeight: '1.3',
    letterSpacing: '-0.4px',
    textAlign: 'left',
    color: props.theme.colors.carbon,
    fontFamily: props.theme.font.medium,
  },

  body: {
    fontSize: '18px',
    lineHeight: '1.61',
    letterSpacing: '-0.36px',
    textAlign: 'center',
    color: props.theme.colors.smalt,
    fontFamily: props.theme.font.regular,
  },

  body2: {
    fontSize: '14px',
    lineHeight: '1.43',
    color: props.theme.colors.smalt,
    fontFamily: props.theme.font.regular,
  },

  caption: {
    fontSize: '14px',
    lineHeight: '1.86',
    letterSpacing: '-0.28px',
    textAlign: 'center',
    color: props.theme.colors.flint,
    fontFamily: props.theme.font.medium,
  },
  footer: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.24px',
    textAlign: 'left',
    fontWeight: 500,
    color: props.theme.colors.flint,
    fontFamily: props.theme.font.medium,
  },
});

const textVariants = (props: TextProps): CSSObject => {
  const variant = (props.variant && getVariants(props)[props.variant]) || {};
  return {
    color: props.theme.colors.steel,
    fontSize: 14,
    lineHeight: '1.86',
    letterSpacing: '-0.28px',
    fontFamily: props.theme.font.medium,
    ...variant,
    ...(props.color ? { color: props.theme.colors[props.color] } : {}),
  };
};

export const Text = styled.span<TextProps>`
  ${textVariants}
`;

export const ParagraphText = styled.p<TextProps>`
  ${textVariants}
`;

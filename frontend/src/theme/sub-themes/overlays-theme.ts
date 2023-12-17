import { css } from 'styled-components';

export const overlayShapeStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  border: solid 1px ${({ theme }) => theme.colors.koala};
  box-shadow: 0 20px 40px 0 #5b65701a;
`;

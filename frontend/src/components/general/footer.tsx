import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Text } from 'src/components/general/text';

import { currencyFormatter } from 'src/components/utils/currencyFormatter';

const BlueText = styled(Text)`
  color: ${({ theme }) => theme.colors.globalBlue};
`;

const Container = styled.p`
  margin-top: 12px;
  text-align: left;
`;

export const Footer = ({ price, entity, children }: { price: number; entity: string; children?: ReactNode }) => {
  return (
    <Container>
      <Text variant="footer">Cost per excess units: </Text>
      <BlueText variant="footer">
        {' '}
        {currencyFormatter.format(price)} per additional {entity}.{' '}
      </BlueText>
      {children}
    </Container>
  );
};

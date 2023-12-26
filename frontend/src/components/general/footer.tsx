import React, { ReactNode } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import { Text } from 'src/components/general/text';

const BlueText = styled(Text)`
  color: ${({ theme }) => theme.colors.globalBlue};
`;

const Container = styled.p`
  margin-top: 12px;
  text-align: left;
`;

export const Footer = ({ entity, children }: { entity: string; children?: ReactNode }) => {
  return (
    <Container>
      <Text variant="footer">Cost per excess units: </Text>
      <BlueText variant="footer"> $xx per additional {entity}. </BlueText>
      {children}
    </Container>
  );
};

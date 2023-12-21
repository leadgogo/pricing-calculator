import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

import { Text } from 'src/components/general/text';

import USAIcon from 'src/assets/usa-icon';
import PuertoRicoIcon from 'src/assets/puerto-rico-icon';
import CanadaIcon from 'src/assets/canadad-icon';

export const SectionWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 15px;
  border: solid 1px rgba(152, 169, 188, 0.2);
`;

const Container = styled(SectionWrapper)`
  padding: 20px;
`;
const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.koala}`};
  padding-bottom: 15px;
`;

const FlagContainer = styled(Row)`
  gap: 4px;
  margin-left: auto;
`;

type SectionContainerProps = {
  title: string;
  icon?: JSX.Element;
  withFlags?: boolean;
  children: React.ReactNode;
};

export const SectionContainer = ({ icon, title, withFlags, children }: SectionContainerProps) => {
  return (
    <Container>
      <SectionTitleContainer>
        {Boolean(icon) && icon}
        <Text variant="h4">{title}</Text>
        {withFlags && (
          <FlagContainer align="middle">
            <PuertoRicoIcon />
            <USAIcon />
            <CanadaIcon />
          </FlagContainer>
        )}
      </SectionTitleContainer>

      {children}
    </Container>
  );
};

export default SectionContainer;

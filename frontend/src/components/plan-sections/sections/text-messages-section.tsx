import React from 'react';
import { Row, Popover, Grid } from 'antd';
import styled from 'styled-components';

import SMSIcon from 'src/assets/sms-icon';
import InfoIcon from 'src/assets/info-icon';

import SectionContainer from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';
import { Footer } from 'src/components/general/footer';
import { NumberInput } from 'src/components/general/input';

const { useBreakpoint } = Grid;

const ContentSection = styled(Row)`
  margin-top: 20px;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.carbon};
  font-weight: 500;
`;

const TotalText = styled(StyledText)`
  max-width: 67%;
  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 58%;
  }  
  `}

  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.xs}) {
    max-width: 45%;
  }  
  `}
`;

const StyledHeading = styled(StyledText)`
  display: inline-block;
  margin-top: 20px;
`;

const TotalSection = styled(ContentSection)`
  background: ${({ theme }) => theme.colors.porcelain};
  padding: 10px 10px 10px 15px;
  border-radius: 8px;
  margin: 20px -10px 0;
`;

const StyledNumberInput = styled(NumberInput)`
  margin-left: 10px;
`;

const BlueText = styled(Text)`
  color: ${({ theme }) => theme.colors.globalBlue};
`;

const smsOptions = [
  {
    text: 'On average, how many text messages (SMS) does your company receive per hour? Please estimate as necessary.',
    name: 'receivedTextsPerHour',
  },
  {
    text: 'How many text messages (SMS) does your company send per hour?',
    name: 'sentTextsPerHour',
  },
];

export const TextMessagesSection: React.FC = () => {
  const { sm: smallBreakpoint } = useBreakpoint();
  return (
    <SectionContainer withFlags title="Text messages (PR/US/CA)" icon={<SMSIcon />}>
      <StyledHeading>Across the entire company, including all locations:</StyledHeading>
      {smsOptions.map(section => (
        <ContentSection key={section.name} wrap={false} align="middle" justify="space-between">
          <Text variant="body2">{section.text}</Text>
          <NumberInput withControls name={section.name} />
        </ContentSection>
      ))}
      <TotalSection wrap={false} align="middle" justify="space-between">
        <TotalText>Monthly SMS messages included in plan estimate:</TotalText>
        <Row wrap={false} align="middle">
          <Popover content={<PopoverContent />} placement={!smallBreakpoint ? 'top' : 'topLeft'}>
            <InfoIcon />
          </Popover>
          <StyledNumberInput withControls name="total" />
        </Row>
      </TotalSection>
      <Footer entity={'SMS / text message'}>
        <Text variant="footer">
          {' '}
          Other fees apply. Business SMS are regulated and subject to <BlueText>additional fees</BlueText> and rules
          based on detailed registrations managed by The Campaign Registry.
        </Text>
      </Footer>
    </SectionContainer>
  );
};

const PopoverContainer = styled.div`
  width: 240px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PopoverText = styled(Text)`
  font-family: ${({ theme }) => theme.font.regular};
  line-height: normal;
  letter-spacing: normal;
`;
const StyledPopoverText = styled(Text)`
  line-height: normal;
`;

const PopoverContent = () => {
  return (
    <PopoverContainer>
      <Text variant="body2" color="carbon">
        ¿Cómo calculamos los mensajes de texto?
      </Text>
      <PopoverText variant="footer">
        Tomamos como referencia el horario de tu compañía (
        <StyledPopoverText variant="footer" color="smalt">
          cantidad de días al mes x horas
        </StyledPopoverText>
        )
        <br />
        <br />
        Lo multiplicamos por la cantidad de mensajes de texto necesarios estimados, los cuales surgen de la{' '}
        <StyledPopoverText variant="footer" color="smalt">
          cantidad de mensajes de texto que se reciben + la cantidad de mensajes de texto que se envían.
        </StyledPopoverText>
      </PopoverText>
    </PopoverContainer>
  );
};

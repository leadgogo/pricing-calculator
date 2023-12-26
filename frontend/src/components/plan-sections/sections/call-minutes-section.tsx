import React from 'react';
import { Row, Popover, Select, Grid } from 'antd';
import styled from 'styled-components';

import RingerIcon from 'src/assets/ringer-icon';
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
  line-height: 1.43;
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
  margin-top: 20px;
  display: inline-block;
`;

const TotalSection = styled(ContentSection)`
  margin: 20px -10px 0;
  background: ${({ theme }) => theme.colors.porcelain};
  padding: 10px 10px 10px 15px;
  border-radius: 8px;
`;

const BottomContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: -20px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.koala}`};
`;

const BottomSection = styled.div`
  margin: 10px -10px -10px;
  background: ${({ theme }) => theme.colors.secondaryTopaz10};
  padding: 20px 10px 20px 15px;
  border-radius: 8px;
`;

const StyledNumberInput = styled(NumberInput)`
  margin-left: 10px;
`;

const BlueText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.globalBlue};
`;

const BottomText = styled(BlueText)`
  color: ${({ theme }) => theme.colors.globalBlue};
  line-height: 1.25;
  letter-spacing: -0.32px;
  display: inline-block;
  margin-bottom: 10px;
`;

const MonthlyMinutesText = styled(Text)`
  max-width: 60%;
`;

const StyledSelect = styled(Select)`
  width: 232px;
  height: 42px;
  margin-left: 12px;

  & .ant-select-selector {
    border-radius: 4px;
    border-color: transparent !important;
  }
`;

const DropdownText = styled(Text)`
  color: ${({ theme }) => theme.colors.storm};
  font-family: ${({ theme }) => theme.font.regular};
`;

const callOptions = [
  {
    text: 'On average, how many calls does your company handle per hour? Please estimate as necessary.',
    name: 'callsAmount',
  },
  {
    text: 'What is the average duration of these calls, in minutes?',
    name: 'callDuration',
  },
];

export const CallMinutesSection: React.FC = () => {
  const { sm: smallBreakpoint } = useBreakpoint();
  return (
    <SectionContainer withFlags title="Voice call minutes (PR/US/CA)" icon={<RingerIcon />}>
      <StyledHeading>Across the entire company, including all locations:</StyledHeading>
      {callOptions.map(section => (
        <ContentSection key={section.name} wrap={false} align="middle" justify="space-between">
          <Text variant="body2">{section.text}</Text>
          <NumberInput withControls name={section.name} />
        </ContentSection>
      ))}
      <TotalSection wrap={false} align="middle" justify="space-between">
        <TotalText>Monthly estimate of telephone minutes needed by the company:</TotalText>
        <Row wrap={false} align="middle">
          <Popover content={<PopoverContent />} placement={!smallBreakpoint ? 'top' : 'topLeft'}>
            <InfoIcon />
          </Popover>
          <StyledNumberInput withControls name="total" />
        </Row>
      </TotalSection>
      <Footer entity={'minute'}>
        <Text variant="footer"> Other fees may apply.</Text>
      </Footer>
      <BottomContainer>
        <BottomSection>
          <BottomText>Prepaid minutes</BottomText>
          <Row wrap={false} align="middle" justify="space-between">
            <MonthlyMinutesText variant="body2">
              Monthly prepaid telephone minutes included in plan estimate (based on estimate of minutes needed); change
              as necessary.
            </MonthlyMinutesText>
            <StyledSelect
              defaultValue="jack"
              onChange={() => null}
              options={[
                {
                  value: 'jack',
                  label: (
                    <Row align="middle" justify="space-between">
                      <BlueText>100,000 mins</BlueText>
                      <DropdownText variant="body2">$1,499.00</DropdownText>
                    </Row>
                  ),
                },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </Row>
        </BottomSection>
      </BottomContainer>
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
        ¿Cómo calculamos los minutos?
      </Text>
      <PopoverText variant="footer">
        Tomamos como referencia el horario de tu compañía (
        <StyledPopoverText variant="footer" color="smalt">
          cantidad de días al mes x horas
        </StyledPopoverText>
        )
        <br />
        <br />
        Lo multiplicamos por la cantidad de minutos estimados, los cuales surgen de la{' '}
        <StyledPopoverText variant="footer" color="smalt">
          cantidad de llamadas x tiempo aproximado de las mismas.
        </StyledPopoverText>
        <br /> <br />
        Finalmente multiplicamos{' '}
        <StyledPopoverText variant="footer" color="smalt">
          x 2
        </StyledPopoverText>{' '}
        el resultado para cubrir la estructura de como funcionan las llamadas dentro de Leadgogo.
      </PopoverText>
    </PopoverContainer>
  );
};

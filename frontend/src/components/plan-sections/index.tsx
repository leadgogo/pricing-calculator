import React from 'react';
import styled from 'styled-components';
import { Radio } from 'antd';

import { useEstimate } from 'src/features/estimate/hooks/useEstimate';

import { CompanySection } from 'src/components/plan-sections/sections/company-section';
import { ContactsSection } from 'src/components/plan-sections/sections/contacts-section';
import { PhoneNumberSection } from 'src/components/plan-sections/sections/phone-numbers-section';
import { CallMinutesSection } from 'src/components/plan-sections/sections/call-minutes-section';
import { TextMessagesSection } from 'src/components/plan-sections/sections/text-messages-section';
import { WhatsAppSections } from 'src/components/plan-sections/sections/whatsapp-section';
import { Text } from 'src/components/general/text';

const { Group, Button } = Radio;

const PlanContainer = styled.div`
  width: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 662px;

  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.xl}) {
    margin: auto;
  }  
  `}
`;

const StyledSlider = styled(Group)`
  & .ant-radio-button-checked {
    background: ${({ theme }) => theme.colors.monk} !important;
    border-color: ${({ theme }) => theme.colors.monk} !important;
    border-radius: 10px;
    top: 5px;
    left: 5px;
    margin-top: 0px;
  }

  & span {
    height: calc(100% - 10px) !important;
    width: calc(100% - 8px) !important;
    display: inline-block;
    margin-top: 5px;
  }

  & .ant-radio-button-wrapper {
    background: ${({ theme }) => theme.colors.white} !important;
  }

  & .ant-radio-button-wrapper::before {
    background: ${({ theme }) => theme.colors.white} !important;
  }
`;

const StyledOption = styled(Button)`
  background: ${({ theme }) => theme.colors.white} !important;
  border-color: ${({ theme }) => theme.colors.white} !important;
  width: 33.33%;
  height: 50px !important;
  white-space: nowrap;
`;

const RightStyledOption = styled(StyledOption)`
  & .ant-radio-button-checked {
    left: 3px;
  }
`;

const StyledText = styled(Text)<{ selected: boolean }>`
  width: 100%;
  display: inline-block;
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.flint)};
`;

export const PlanSections: React.FC = () => {
  const { doSetSelectedPlan, selectedPlan, PlanTypes } = useEstimate();

  return (
    <PlanContainer>
      <Text variant="h2">Customize your plan:</Text>
      <StyledSlider value={selectedPlan} buttonStyle="solid" size="large" onChange={doSetSelectedPlan}>
        <StyledOption value={PlanTypes.Essential}>
          <StyledText selected={selectedPlan === PlanTypes.Essential} variant="caption">
            Essential plan
          </StyledText>
        </StyledOption>
        <RightStyledOption value={PlanTypes.Professional}>
          <StyledText selected={selectedPlan === PlanTypes.Professional} variant="caption">
            Professional Plan
          </StyledText>
        </RightStyledOption>
        <RightStyledOption value={PlanTypes.Premium}>
          <StyledText selected={selectedPlan === PlanTypes.Premium} variant="caption">
            Premium Plan
          </StyledText>
        </RightStyledOption>
      </StyledSlider>
      <CompanySection />
      <ContactsSection />
      <PhoneNumberSection />
      <CallMinutesSection />
      <TextMessagesSection />
      <WhatsAppSections />
    </PlanContainer>
  );
};

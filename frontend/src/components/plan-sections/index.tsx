import React from 'react';
import { Row, Switch, Input } from 'antd';
import styled from 'styled-components';

import PhoneNumberIcon from 'src/assets/phone-number-icon';
import RingerIcon from 'src/assets/ringer-icon';
import SMSIcon from 'src/assets/ringer-icon';
import WhatsAppIcon from 'src/assets/whatsapp-icon';
import AddIcon from 'src/assets/add-icon';
import SubstractIcon from 'src/assets/substract-icon';

import { CompanySection } from 'src/components/plan-sections/sections/company-section';
import { ContactsSection } from 'src/components/plan-sections/sections/contacts-section';
import SectionContainer, { SectionWrapper } from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';

const PlanContainer = styled.div`
  width: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 662px;
`;

const WhatsAppContainer = styled(SectionWrapper)`
  padding: 26px 20px 20px 20px;
`;

const StyledTitle = styled(Text)`
  margin-left: 10px;
`;

const StyledText = styled(Text)`
  max-width: 70%;
`;

const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background: ${({ theme }) => theme.colors.cosmo};
    & :hover {
      background: ${({ theme }) => theme.colors.cosmo};
    }
  }
`;

const StyledInput = styled(Input)`
  width: 125px;
  height: 38px;
  input {
    text-align: center;
    font-size: 16px !important;
    color: ${({ theme }) => theme.colors.smalt};
    font-family: ${({ theme }) => theme.font.medium};
  }
`;

export const PlanSections: React.FC = () => {
  return (
    <PlanContainer>
      <Text variant="h2">Customize your plan:</Text>
      <CompanySection />
      <ContactsSection />
      <SectionContainer title="Phone numbers" icon={<PhoneNumberIcon />}>
        Here We Go!!!
      </SectionContainer>
      <SectionContainer withFlags title="Voice call minutes (PR/US/CA)" icon={<RingerIcon />}>
        Here We Go!!!
      </SectionContainer>
      <SectionContainer withFlags title="Text messages (PR/US/CA)" icon={<SMSIcon />}>
        Here We Go!!!
      </SectionContainer>
      <WhatsAppContainer>
        <Row align="middle">
          <WhatsAppIcon />
          <StyledTitle variant="h4">WhatsApp Channel</StyledTitle>
        </Row>
        <Row align="top" justify="space-between">
          <StyledText>
            Estimate the cost of using WhatsApp Business as a communication channel in the company.
          </StyledText>
          <StyledSwitch />
        </Row>
      </WhatsAppContainer>
    </PlanContainer>
  );
};

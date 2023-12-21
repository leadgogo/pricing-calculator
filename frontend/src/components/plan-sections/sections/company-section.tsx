import React from 'react';
import { Row, Input } from 'antd';
import styled from 'styled-components';

import CompanyIcon from 'src/assets/company-icon';

import AddIcon from 'src/assets/add-icon';
import SubstractIcon from 'src/assets/substract-icon';

import SectionContainer from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';

const CompaniesSection = styled(Row)`
  margin-top: 20px;
`;

const StyledText = styled(Text)`
  line-height: 1.43;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.smalt};
`;

const BlueText = styled(StyledText)`
  color: ${({ theme }) => theme.colors.globalBlue};
`;

const StyledInput = styled(Input)`
  margin-left: 20px;
  min-width: 125px;
  width: 125px;
  height: 38px;
  input {
    text-align: center;
    font-size: 16px !important;
    color: ${({ theme }) => theme.colors.smalt};
    font-family: ${({ theme }) => theme.font.medium};
  }
`;

const Footer = styled(Row)`
  margin-top: 12px;
`;

const companyOptions = [
  {
    text: 'How many locations does the company operate where Leadgogo would be used?',
    name: 'locations',
  },
  {
    text: 'How many days per week is the business open?',
    name: 'days',
  },
  {
    text: 'How many hours per day does the business remain open?',
    name: 'hoursPerDay',
  },
];

export const CompanySection: React.FC = () => {
  return (
    <SectionContainer title="Companies" icon={<CompanyIcon />}>
      {companyOptions.map(section => (
        <CompaniesSection key={section.name} wrap={false} align="middle" justify="space-between">
          <StyledText>{section.text}</StyledText>
          <StyledInput maxLength={4} defaultValue="1" prefix={<SubstractIcon />} suffix={<AddIcon />} />
        </CompaniesSection>
      ))}
      <Footer align="middle">
        <Text variant="footer">Cost per excess units: </Text>

        <BlueText variant="footer"> $xx per additional company.</BlueText>
      </Footer>
    </SectionContainer>
  );
};

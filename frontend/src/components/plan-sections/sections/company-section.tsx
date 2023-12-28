import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import CompanyIcon from 'src/assets/company-icon';

import { useCompaniesData } from 'src/features/companies/hooks/useCompaniesData';

import { Footer } from 'src/components/general/footer';
import SectionContainer from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';
import { NumberInput } from 'src/components/general/input';

const CompaniesSection = styled(Row)`
  margin-top: 20px;
`;

const companyOptions = [
  {
    text: 'How many locations does the company operate where Leadgogo would be used?',
    name: 'totalLocations',
  },
  {
    text: 'How many days per week is the business open?',
    name: 'workingDaysPerWeek',
  },
  {
    text: 'How many hours per day does the business remain open?',
    name: 'hoursOpenPerDay',
  },
];

export const CompanySection = () => {
  const { companiesState, onSectionValueChange } = useCompaniesData();

  return (
    <SectionContainer title="Companies" icon={<CompanyIcon />}>
      {companyOptions.map(section => (
        <CompaniesSection key={section.name} wrap={false} align="middle" justify="space-between">
          <Text variant="body2">{section.text}</Text>
          <NumberInput
            withControls
            name={section.name}
            value={String(companiesState[section.name])}
            onChange={(value: string) => onSectionValueChange({ value, field: section.name })}
          />
        </CompaniesSection>
      ))}
      <Footer entity={'company'} />
    </SectionContainer>
  );
};

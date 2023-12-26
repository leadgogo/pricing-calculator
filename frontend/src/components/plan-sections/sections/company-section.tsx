import React, { useState, useCallback } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import CompanyIcon from 'src/assets/company-icon';

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
  const [inputsValue, setSliderValue] = useState({ hoursPerDay: 1, days: 1, locations: 1 });
  console.log('inputsValue', inputsValue);

  const onChangeInput = useCallback(({ id, value }) => {
    setSliderValue({ ...inputsValue, [id]: Number(value) });
    console.log(value, id);
  }, []);

  return (
    <SectionContainer title="Companies" icon={<CompanyIcon />}>
      {companyOptions.map(section => (
        <CompaniesSection key={section.name} wrap={false} align="middle" justify="space-between">
          <Text variant="body2">{section.text}</Text>
          <NumberInput
            withControls
            name={section.name}
            value={String(inputsValue[section.name])}
            onChange={onChangeInput}
          />
        </CompaniesSection>
      ))}
      <Footer entity={'company'} />
    </SectionContainer>
  );
};

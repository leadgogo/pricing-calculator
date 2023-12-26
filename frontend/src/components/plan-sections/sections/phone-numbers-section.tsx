import React, { useState, useCallback } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import PhoneNumberIcon from 'src/assets/phone-number-icon';

import { Footer } from 'src/components/general/footer';
import SectionContainer from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';
import { NumberInput } from 'src/components/general/input';

const DetailsSection = styled(Row)`
  margin-top: 20px;
`;

const TotalSection = styled(DetailsSection)`
  background: ${({ theme }) => theme.colors.porcelain};
  padding: 10px 10px 10px 15px;
  border-radius: 8px;
  margin: 20px -10px 0;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.carbon};
  font-weight: 500;
`;

const StyledHeading = styled(StyledText)`
  margin-top: 20px;
  display: inline-block;
`;

const phoneNumberOptions = [
  {
    text: 'How many people in your company need a unique phone number??',
    name: 'agentPhoneNumber',
  },
  {
    text: 'How many additional phone numbers are needed (e.g. for separate departments, stores)??',
    name: 'extraPhoneNumbers',
  },
  {
    text: 'If measuring the effectiveness of advertising campaigns, how many of these campaigns will include a phone number?',
    name: 'campaigns',
  },
];

export const PhoneNumberSection: React.FC = () => {
  const [inputsValue, setSliderValue] = useState({ agentPhoneNumber: 1, extraPhoneNumbers: 1, campaigns: 1 });
  console.log('inputsValue', inputsValue);

  const onChangeInput = useCallback(({ id, value }) => {
    setSliderValue({ ...inputsValue, [id]: Number(value) });
    console.log(value, id);
  }, []);

  return (
    <SectionContainer title="Phone numbers" icon={<PhoneNumberIcon />}>
      <StyledHeading>Across the entire company, including all locations:</StyledHeading>
      {phoneNumberOptions.map(section => (
        <DetailsSection key={section.name} wrap={false} align="middle" justify="space-between">
          <Text variant="body2">{section.text}</Text>
          <NumberInput
            withControls
            name={section.name}
            value={String(inputsValue[section.name])}
            onChange={onChangeInput}
          />
        </DetailsSection>
      ))}
      <TotalSection wrap={false} align="middle" justify="space-between">
        <StyledText>Phone numbers included in plan estimate:</StyledText>
        <NumberInput withControls name="total" />
      </TotalSection>
      <Footer entity={'phone number'} />
    </SectionContainer>
  );
};

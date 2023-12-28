import React from 'react';
import { Row, Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import styled from 'styled-components';

import AvatarIcon from 'src/assets/user-avatar-icon';
import SectionContainer from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';
import { NumberInput } from 'src/components/general/input';
import { Footer } from 'src/components/general/footer';

import { useContacts } from 'src/features/contacts/hooks/useContacts';

const marks: SliderMarks = {
  0: '',
  1000: ' ',
  2000: ' ',
  3000: ' ',
  4000: ' ',
  5000: ' ',
  6000: ' ',
  7000: ' ',
  8000: ' ',
  9000: ' ',
  10000: ' ',
  11000: ' ',
  12000: ' ',
  13000: ' ',
  14000: ' ',
  15000: '',
};

const StyledSlider = styled(Slider)`
  margin-top: 18px;
  margin-bottom: 18px !important;
  & .ant-slider-track {
    background: ${({ theme }) => theme.colors.cosmo} !important;
  }

  & .ant-slider-handle {
    height: 12px;
    width: 12px;
  }

  & .ant-slider-handle::after {
    background: ${({ theme }) => theme.colors.cosmo};
    box-shadow: 0 0 0 3px white !important;
    height: 12px;
    width: 12px;
  }

  & .ant-slider-handle:focus::after {
    box-shadow: 0 0 0 3px white;
  }

  & .ant-slider-handle:hover::after {
    box-shadow: 0 0 0 3px white;
    height: 14px;
    width: 14px;
  }

  & .ant-slider-dot {
    width: 1px;
    height: 4px;
    inset-block-start: 0px;
    border: none;
    opacity: 0.4;
    background: ${({ theme }) => theme.colors.flint};
  }

  & .ant-slider-dot-active {
    border-color: transparent !important;
    opacity: 0.5;
    background: ${({ theme }) => theme.colors.white};
  }
`;
const ContactsContent = styled(Row)`
  margin-top: 20px;
`;

export const ContactsSection = () => {
  const { totalContacts, doSetTotalContacts } = useContacts();

  return (
    <SectionContainer title="Contacts" icon={<AvatarIcon />}>
      <ContactsContent wrap={false} align="middle" justify="space-between">
        <Text variant="body2">
          On average, how many contacts (unique individuals) communicate with your business on a daily basis? Please
          estimate as necessary.
        </Text>
        <NumberInput maxLength={5} value={String(totalContacts)} onChange={doSetTotalContacts} />
      </ContactsContent>

      <StyledSlider
        marks={marks}
        value={totalContacts}
        onChange={doSetTotalContacts}
        min={0}
        max={15000}
        tooltip={{ open: false }}
        step={1000}
      />

      <Footer entity="contact" />
    </SectionContainer>
  );
};

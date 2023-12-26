import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

import AddIcon from 'src/assets/add-icon';
import SubstractIcon from 'src/assets/substract-icon';

const StyledInput = styled(Input)`
  margin-left: 20px;
  min-width: 125px;
  width: 125px;
  height: 38px;
  text-align: center;
  font-size: 16px !important;
  color: ${({ theme }) => theme.colors.smalt};
  font-family: ${({ theme }) => theme.font.medium};

  input {
    text-align: center;
    font-size: 16px !important;
    color: ${({ theme }) => theme.colors.smalt};
    font-family: ${({ theme }) => theme.font.medium};
  }

  & .ant-input-prefix {
    cursor: pointer;
  }

  & .ant-input-suffix {
    cursor: pointer;
  }
`;

type NumberInputType = {
  name?: string;
  maxLength?: number;
  defaultValue?: string;
  withControls?: boolean;
  value: string;
  onChange: ({ value, id }: { value: string; id: string }) => void;
};

export const NumberInput = ({
  name,
  maxLength,
  defaultValue,
  withControls,
  value,
  onChange,
  ...rest
}: NumberInputType) => {
  const [sliderValue, setSliderValue] = useState(1000);
  return (
    <StyledInput
      id={name}
      maxLength={maxLength}
      defaultValue={defaultValue || '1'}
      prefix={
        withControls && (
          <SubstractIcon
            onClick={() => {
              console.log('hereee');
              onChange({ value: String(Number(value) - 1), id: name || '' });
            }}
          />
        )
      }
      suffix={
        withControls && (
          <AddIcon
            onClick={() => {
              onChange({ value: String(Number(value) + 1), id: name || '' });
            }}
          />
        )
      }
      value={value || ''}
      onChange={({ target: { value, id } }) => onChange({ value, id })}
      {...rest}
    />
  );
};

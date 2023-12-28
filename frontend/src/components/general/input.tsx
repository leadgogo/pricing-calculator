import React, { useCallback } from 'react';
import { Input, Button } from 'antd';
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

  & .ant-input-affix-wrapper:focus {
    border-color: transparent !important;
  }
`;

const StyledButton = styled(Button)`
  border-color: transparent !important;
  padding: 7px;
  outline: none !important;
  width: 16px !important;
  min-width: 16px !important;

  & div {
    display: none;
  }
`;

type NumberInputType = {
  name?: string;
  maxLength?: number;
  defaultValue?: string;
  withControls?: boolean;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export const NumberInput = ({
  name,
  maxLength,
  defaultValue,
  withControls,
  value,
  onChange,
  disabled,
  ...rest
}: NumberInputType) => {
  const onInputChange = useCallback(e => {
    onChange?.(e.target.value);
  }, []);

  return (
    <StyledInput
      id={name}
      maxLength={maxLength}
      defaultValue={defaultValue || '1'}
      prefix={
        withControls && (
          <StyledButton
            type="primary"
            shape="circle"
            ghost
            icon={<SubstractIcon />}
            onClick={() => {
              onChange?.(String(Number(value) - 1));
            }}
          />
        )
      }
      suffix={
        withControls && (
          <StyledButton
            type="primary"
            shape="circle"
            ghost
            icon={<AddIcon />}
            onClick={() => {
              onChange?.(String(Number(value) + 1));
            }}
          />
        )
      }
      value={value || ''}
      onChange={onInputChange}
      disabled={disabled}
      {...rest}
    />
  );
};

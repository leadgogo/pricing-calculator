import React from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';

const StyledSwitch = styled(Switch)`
  border-color: ${({ theme }) => theme.colors.cosmo} !important;
  outline: ${({ theme }) => `1px solid ${theme.colors.flint}`} !important;
  &.ant-switch-checked {
    background: ${({ theme }) => theme.colors.cosmo} !important;
    border-color: ${({ theme }) => theme.colors.cosmo} !important;
    outline: ${({ theme }) => `1px solid ${theme.colors.cosmo}`} !important;
    & :hover {
      background: ${({ theme }) => theme.colors.cosmo};
    }
  }
`;

type SwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export const SwitchInput = ({ value, onChange }: SwitchProps) => {
  return <StyledSwitch value={value} onChange={onChange} />;
};

import React from 'react';
import { Row, Input } from 'antd';
import styled from 'styled-components';

import AvatarIcon from 'src/assets/user-avatar-icon';
import AddIcon from 'src/assets/add-icon';
import SubstractIcon from 'src/assets/substract-icon';
import SectionContainer from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';

const ContactsContent = styled(Row)`
  margin-top: 20px;
`;

const StyledText = styled(Text)`
  line-height: 1.43;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.smalt};
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

const StyledRow = styled(Row)`
  margin-top: 12px;
`;

const BlueText = styled(StyledText)`
  color: ${({ theme }) => theme.colors.globalBlue};
`;

export const ContactsSection: React.FC = () => {
  return (
    <SectionContainer title="Contacts" icon={<AvatarIcon />}>
      <ContactsContent wrap={false} align="middle" justify="space-between">
        <StyledText>
          On average, how many contacts (unique individuals) communicate with your business on a daily basis? Please
          estimate as necessary.
        </StyledText>
        <StyledInput maxLength={4} defaultValue="1" prefix={<SubstractIcon />} suffix={<AddIcon />} />
      </ContactsContent>
      <StyledRow align="middle">
        <Text variant="footer">Cost per excess units: </Text>

        <BlueText variant="footer"> $xx per additional company.</BlueText>
      </StyledRow>
    </SectionContainer>
  );
};

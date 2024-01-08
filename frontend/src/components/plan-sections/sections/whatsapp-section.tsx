import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import WhatsAppIcon from 'src/assets/whatsapp-icon';

import { useWhatsappData } from 'src/features/whatsapp/hooks/useWhatsappData';

import { SectionWrapper } from 'src/components/general/section-container';
import { Text } from 'src/components/general/text';
import { SwitchInput } from 'src/components/general/switch';
import { NumberInput } from 'src/components/general/input';
import { fadeIn } from 'src/theme/theme';

const WhatsAppContainer = styled(({ isWhatsappActivated, ...rest }) => <SectionWrapper {...rest} />)`
  padding: 26px 20px 20px 20px;
  transition: all 0.5s ease-out;
  max-height: ${({ isWhatsappActivated }) => (isWhatsappActivated ? 500 : 165)}px;
`;

const StyledTitle = styled(Text)`
  margin-left: 10px;
`;

const StyledText = styled(Text)`
  max-width: 70%;
  color: ${({ theme }) => theme.colors.flint};
`;

const StyledRow = styled(Row)`
  margin-top: 10px;
`;

const CollapsibleContainer = styled.div`
  animation: ${fadeIn} 0.6s ease-in-out;
`;

const BottomContainer = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.colors.koala}`};
  margin-top: 15px;
  margin-bottom: 20px;
  padding-top: 20px;
`;

const StyledHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.carbon};
  margin-bottom: 20px;
  display: inline-block;
`;

const BlueText = styled(Text)`
  color: ${({ theme }) => theme.colors.globalBlue};
`;

export const WhatsAppSections = () => {
  const { isWhatsappActivated, totalPhoneNumbers, doSetIsWhatsappActivated, doSetTotalPhonenumbers } =
    useWhatsappData();

  return (
    <WhatsAppContainer isWhatsappActivated={isWhatsappActivated}>
      <Row align="middle">
        <WhatsAppIcon />
        <StyledTitle variant="h4">WhatsApp Channel</StyledTitle>
      </Row>
      <StyledRow align="top" justify="space-between">
        <StyledText variant="body2">
          Estimate the cost of using WhatsApp Business as a communication channel in the company.
        </StyledText>
        <SwitchInput value={isWhatsappActivated} onChange={doSetIsWhatsappActivated} />
      </StyledRow>
      {isWhatsappActivated && (
        <CollapsibleContainer>
          <BottomContainer>
            <StyledHeading>Across the entire company, including all locations:</StyledHeading>
            <Row wrap={false} align="middle" justify="space-between">
              <Text variant="body2">How many phone numbers are expected to be enabled with WhatsApp Business?</Text>
              <NumberInput
                withControls
                name="whatsappTotalNumbers"
                onChange={doSetTotalPhonenumbers}
                value={String(totalPhoneNumbers)}
                defaultValue="1"
              />
            </Row>
          </BottomContainer>
          <Text variant="footer">
            <BlueText variant="footer">Cost of $xx per WhatsApp number</BlueText> integrated into the Leadgogo platform,
            with volume pricing reflected in the price estimate as applicable. Other charges apply. WhatsApp Business
            messages are regulated and subject to fees by Meta. Please refer to the most recent Meta pricing by{' '}
            <BlueText variant="footer">clicking here</BlueText>.
          </Text>
        </CollapsibleContainer>
      )}
    </WhatsAppContainer>
  );
};

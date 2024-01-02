import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import { SectionWrapper } from 'src/components/general/section-container';
import { Button } from 'src/components/general/button';
import { Text } from 'src/components/general/text';
import { useEstimate } from 'src/features/estimate/hooks/useEstimate';
import { currencyFormatter } from 'src/components/utils/currencyFormatter';

const PriceContainer = styled(SectionWrapper)`
  margin-right: auto;
  max-width: 456px;

  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.xl}) {
    margin: auto;
    max-width: 662px;
}  
  `}
`;

const TitleContainer = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.koala}`};
  padding: 30px 30px 20px;
`;

const SectionHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.carbon};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 16px;
  line-height: 1.63;
  letter-spacing: -0.32px;
`;

const StyledRow = styled(Row)`
  margin-bottom: 5px;
`;

const StyledITemRow = styled(Row)`
  margin-top: 15px;
  width: 100%;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.steel};
  font-weight: 500;
`;

const TotalsSection = styled.div`
  margin: 0 30px;
  padding: 30px 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.koala}`};
`;

const TotalsContainer = styled.div`
  margin: 20px 15px 15px 14px;
  padding: 20px 14px 14px 15px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryMint10};
`;

const StyledTotalsRow = styled(Row)`
  width: 100%;
  border-radius: 8px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.koala}`};
  padding-bottom: 14px;
  margin-bottom: 14px;
`;

const EstimateText = styled(Text)`
  color: ${({ theme }) => theme.colors.carbon};
  font-family: ${({ theme }) => theme.font.bold};
`;

const TotalText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondaryMintDark};
  font-size: 16px;
  font-weight: 500;
`;

const TotalButtonContainer = styled.div`
  padding: 20px 30px;
  border-top: ${({ theme }) => `2px solid ${theme.colors.koala}`};
`;

const DisclaimerText = styled(Text)`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 11px;
  line-height: 1.45;
  letter-spacing: -0.22px;
  color: ${({ theme }) => theme.colors.flint};
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
  line-height: 2.13;
  letter-spacing: -0.32px;
  font-family: ${({ theme }) => theme.font.regular};
  border-radius: 6px;
  height: 48px;
  outline: none;
`;

export const EstimateTotals: React.FC = () => {
  const {
    generateink,
    selectedPlanData,
    prepaidCharges,
    showAdditionalCharges,
    extraCompaniesCharge,
    extraContactsCharge,
    extraPhoneNumberCharge,
    extraCallMinutesCharge,
    extraTextMessagesCharge,
    totalCharges,
  } = useEstimate();

  return (
    <PriceContainer>
      <TitleContainer>
        <Text variant="h3">Price estimate in USD:</Text>
      </TitleContainer>
      <TotalsSection>
        <StyledRow align="middle" justify="space-between">
          <SectionHeading variant="h2">{selectedPlanData.title}</SectionHeading>
          <TotalText>{currencyFormatter.format(Number(selectedPlanData.monthlyCost))}/mo</TotalText>
        </StyledRow>
        {selectedPlanData.includedItems.map(item => (
          <StyledITemRow key={item} align="middle" justify="space-between">
            <StyledText>{item}</StyledText>
          </StyledITemRow>
        ))}
      </TotalsSection>

      {Boolean(prepaidCharges.length) && (
        <TotalsSection>
          <StyledRow align="middle" justify="space-between">
            <SectionHeading variant="h2">Prepaid Charges</SectionHeading>
          </StyledRow>
          {prepaidCharges.map(item => (
            <StyledITemRow key={item.total} align="middle" justify="space-between">
              <StyledText>{item.description}</StyledText>
              <StyledText>{currencyFormatter.format(Number(item.total))}/m</StyledText>
            </StyledITemRow>
          ))}
        </TotalsSection>
      )}

      {showAdditionalCharges && (
        <TotalsSection>
          <StyledRow align="middle" justify="space-between">
            <SectionHeading variant="h2">Additional Charges</SectionHeading>
          </StyledRow>
          {extraCompaniesCharge && (
            <StyledITemRow align="middle" justify="space-between">
              <StyledText>{extraCompaniesCharge.text}</StyledText>
              <StyledText>{currencyFormatter.format(Number(extraCompaniesCharge.total))}</StyledText>
            </StyledITemRow>
          )}
          {extraContactsCharge && (
            <StyledITemRow align="middle" justify="space-between">
              <StyledText>{extraContactsCharge.text}</StyledText>
              <StyledText>{currencyFormatter.format(Number(extraContactsCharge.total))}</StyledText>
            </StyledITemRow>
          )}
          {extraPhoneNumberCharge && (
            <StyledITemRow align="middle" justify="space-between">
              <StyledText>{extraPhoneNumberCharge.text}</StyledText>
              <StyledText>{currencyFormatter.format(Number(extraPhoneNumberCharge.total))}</StyledText>
            </StyledITemRow>
          )}
          {extraCallMinutesCharge && (
            <StyledITemRow align="middle" justify="space-between">
              <StyledText>{extraCallMinutesCharge.text}</StyledText>
              <StyledText>{currencyFormatter.format(Number(extraCallMinutesCharge.total))}</StyledText>
            </StyledITemRow>
          )}
          {extraTextMessagesCharge && (
            <StyledITemRow align="middle" justify="space-between">
              <StyledText>{extraTextMessagesCharge.text}</StyledText>
              <StyledText>{currencyFormatter.format(Number(extraTextMessagesCharge.total))}</StyledText>
            </StyledITemRow>
          )}
        </TotalsSection>
      )}

      <TotalsContainer>
        <StyledTotalsRow align="middle" justify="space-between">
          <EstimateText>ESTIMATED TOTAL MONTHLY PRICE</EstimateText>
          <TotalText>{currencyFormatter.format(totalCharges)}</TotalText>
        </StyledTotalsRow>
        <Row align="middle" justify="space-between">
          <Text>One-time setup fee</Text>
          <Text>{currencyFormatter.format(Number(selectedPlanData.setupFee))}</Text>
        </Row>
      </TotalsContainer>
      <TotalButtonContainer>
        <DisclaimerText>
          The monthly price estimate is based solely on subscription services with Leadgogo. Other fees may apply. The
          estimated price does not include any third-party fees or applicable taxes. All prices are subject to change
          without notice.
        </DisclaimerText>
        <StyledButton variant="cta" onClick={generateink}>
          Copy link to price estimate
        </StyledButton>
      </TotalButtonContainer>
    </PriceContainer>
  );
};

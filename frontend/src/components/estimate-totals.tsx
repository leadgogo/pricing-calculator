import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import { SectionWrapper } from 'src/components/general/section-container';
import { Button } from 'src/components/general/button';
import { Text } from 'src/components/general/text';

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

const billingSections = [
  {
    title: 'Professional Plan',
    total: '$159.00/mo',
    billingItems: [
      {
        description: '1,000 contacts',
        total: '',
      },
      {
        description: 'company',
        total: '',
      },
      {
        description: '1 phone number',
        total: '',
      },
      {
        description: '250 call minutes (PR/US/CA)',
        total: '',
      },
      {
        description: '100 text messages (PR/US/CA)',
        total: '',
      },
    ],
  },
  {
    title: 'Prepaid charges',
    billingItems: [
      {
        description: '100,000 call minutes (PR/US/CA)',
        total: '$1,499.00/m',
      },
      {
        description: '1 WhatsApp number',
        total: '$50.00/m',
      },
    ],
  },
  {
    title: 'Additional monthly usage',
    billingItems: [
      {
        description: '5 phone numbers',
        total: '$50.00',
      },
      {
        description: '3,356 text messages',
        total: '$158.37',
      },
    ],
  },
];

export const EstimateTotals: React.FC = () => {
  return (
    <PriceContainer>
      <TitleContainer>
        <Text variant="h3">Price estimate in USD:</Text>
      </TitleContainer>
      {billingSections.map(section => {
        return (
          <TotalsSection key="section.title">
            <StyledRow align="middle" justify="space-between">
              <SectionHeading variant="h2">{section.title}</SectionHeading>
              {section.total && <TotalText>{section.total}</TotalText>}
            </StyledRow>
            {section.billingItems.map(item => (
              <StyledITemRow key={item.description} align="middle" justify="space-between">
                <StyledText>{item.description}</StyledText>
                {item.total && <StyledText>{item.total}</StyledText>}
              </StyledITemRow>
            ))}
          </TotalsSection>
        );
      })}
      <TotalsContainer>
        <StyledTotalsRow align="middle" justify="space-between">
          <EstimateText>ESTIMATED TOTAL MONTHLY PRICE</EstimateText>
          <TotalText>$159.00</TotalText>
        </StyledTotalsRow>
        <Row align="middle" justify="space-between">
          <Text>One-time setup fee</Text>
          <Text>$249.00</Text>
        </Row>
      </TotalsContainer>
      <TotalButtonContainer>
        <DisclaimerText>
          The monthly price estimate is based solely on subscription services with Leadgogo. Other fees may apply. The
          estimated price does not include any third-party fees or applicable taxes. All prices are subject to change
          without notice.
        </DisclaimerText>
        <StyledButton variant="cta">Copy link to price estimate</StyledButton>
      </TotalButtonContainer>
    </PriceContainer>
  );
};

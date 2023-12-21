import React from 'react';
import { Layout, Col, Row } from 'antd';
import styled from 'styled-components';

import { PlanSections } from 'src/components/plan-sections';
import { SectionWrapper } from 'src/components/general/section-container';
import { Button } from 'src/components/general/button';
import { Text } from 'src/components/general/text';

const { Header, Content, Footer } = Layout;

const Logo = styled.img``;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  height: 108px;
  background: ${({ theme }) => theme.colors.globalBlue};
`;
const TitleSectionContainer = styled.div`
  margin: auto;
  display: flex;
  gap: 15px;
  flex-direction: column;
  max-width: 690px;
`;

const StyledTitleSection = styled(Row)`
  height: 275px;
  background: ${({ theme }) => theme.colors.white};
  display: block;
  padding: 60px;
`;

const StyledContent = styled(Row)`
  background: #f6f8f9;
  padding: 60px;
`;

const StyledHalf = styled(Col)``;

const PriceContainer = styled(SectionWrapper)`
  margin-right: auto;
  max-width: 456px;
`;

const TitleContainer = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.koala}`};
  padding: 30px 30px 20px;
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
`;

const ContentContainer = styled(Content)`
  backgroung: #f6f8f9;
  padding: 60px 48px;
  box-sizing: border-box;
`;

export const CalculatorContent: React.FC = () => {
  return (
    <Layout>
      <StyledHeader>
        <Logo src="assets/lgg-logo.png" />
      </StyledHeader>
      <StyledTitleSection>
        <TitleSectionContainer>
          <Text variant="h1">Monthly Plan Estimate</Text>
          <Text variant="body">
            Estimate of communication needs, including phone calls, messages, and number of people interacting with the
            business.
          </Text>
          <Text variant="caption">5 MINS TO COMPLETE</Text>
        </TitleSectionContainer>
      </StyledTitleSection>
      <StyledContent gutter={60}>
        <StyledHalf span={12} xl={12} lg={24}>
          <PlanSections />
        </StyledHalf>
        <StyledHalf span={12} xl={12} lg={24}>
          <PriceContainer>
            <TitleContainer>
              <Text variant="h3">Price estimate in USD:</Text>
            </TitleContainer>
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
                The monthly price estimate is based solely on subscription services with Leadgogo. Other fees may apply.
                The estimated price does not include any third-party fees or applicable taxes. All prices are subject to
                change without notice.
              </DisclaimerText>
              <StyledButton variant="cta">Copy link to price estimate</StyledButton>
            </TotalButtonContainer>
          </PriceContainer>
        </StyledHalf>
      </StyledContent>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

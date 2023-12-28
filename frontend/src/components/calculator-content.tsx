import React, { useEffect } from 'react';
import { Layout, Col, Row } from 'antd';
import styled from 'styled-components';

import { PlanSections } from 'src/components/plan-sections';
import { EstimateTotals } from 'src/components/estimate-totals';
import { Text } from 'src/components/general/text';
import { useEstimate } from 'src/features/estimate/hooks/useEstimate';

const { Header, Footer } = Layout;

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
  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.sm}) {
    height: 380px;
  }  
  `}

  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 48px 36px;
  }  
  `}
`;

const StyledText = styled(Text)`
  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 42px
  }  
`}
`;

const StyledContent = styled(Row)`
  background: #f6f8f9;
  padding: 60px;
  margin-left: 0 !important;
  margin-right: 0 !important;
  ${({ theme }) => `
  @media (max-width: ${theme.breakpoints.xl}) {
    justify-content:center;
    gap: 20px;
    padding: 60px 0;
  }  
  `}
`;

const StyledHalf = styled(Col)`
  ${({ theme }) => `
@media (max-width: ${theme.breakpoints.sm}) {
  padding-left: 15px !important;
  padding-right: 15px !important;
}  
`}
`;

export const CalculatorContent: React.FC = () => {
  const { doLoadEstimateFromURL } = useEstimate();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const data = params.get('data');

    if (data) {
      doLoadEstimateFromURL(data);
    }
  }, []);

  return (
    <Layout>
      <StyledHeader>
        <Logo src="assets/lgg-logo.png" />
      </StyledHeader>
      <StyledTitleSection>
        <TitleSectionContainer>
          <StyledText variant="h1">Monthly Plan Estimate</StyledText>
          <Text variant="body">
            Estimate of communication needs, including phone calls, messages, and number of people interacting with the
            business.
          </Text>
          <Text variant="caption">5 MINS TO COMPLETE</Text>
        </TitleSectionContainer>
      </StyledTitleSection>
      <StyledContent gutter={60}>
        <StyledHalf xl={12} lg={24}>
          <PlanSections />
        </StyledHalf>
        <StyledHalf xl={12} lg={24}>
          <EstimateTotals />
        </StyledHalf>
      </StyledContent>
      <Footer style={{ textAlign: 'center' }}>Leadgogo PR 2 The World</Footer>
    </Layout>
  );
};

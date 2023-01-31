import styled from 'styled-components';
import ProgramSectionTitle from '../common/title/ui/ProgramSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 40px;
`;

const Detail = styled.dl`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  border-style: dashed;

  padding-bottom: 20px;

  dd {
    font-weight: 600;
  }

  .highlight {
    color: ${({ theme }) => theme.textColors.primary};
  }
`;

const DescWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding-block: 13px;
`;

const Total = styled.dl`
  padding-top: 20px;

  dd {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColors.primary};
  }
`;

export default function PaymentAmount() {
  return (
    <Container>
      <ProgramSectionTitle>결제 금액</ProgramSectionTitle>
      <Content>
        <Detail>
          <DescWrapper>
            <dt>결제 금액</dt>
            <dd>90,200원</dd>
          </DescWrapper>
          <DescWrapper>
            <dt>쿠폰 사용</dt>
            <dd className="highlight">-5,000원</dd>
          </DescWrapper>
          <DescWrapper>
            <dt>포인트 사용</dt>
            <dd>0원</dd>
          </DescWrapper>
        </Detail>
        <Total>
          <DescWrapper>
            <dt>총 결제 금액</dt>
            <dd>85,200원</dd>
          </DescWrapper>
        </Total>
      </Content>
    </Container>
  );
}

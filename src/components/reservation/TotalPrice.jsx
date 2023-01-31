import styled from 'styled-components';
import ProgramSectionTitle from '../common/title/ui/ProgramSectionTitle';

const Container = styled.article`
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

export default function TotalPrice() {
  return (
    <Container>
      <ProgramSectionTitle>금액 정보</ProgramSectionTitle>
      <Content>
        <Detail>
          <DescWrapper>
            <dt>예약금액</dt>
            <dd>80,000원</dd>
          </DescWrapper>
          <DescWrapper>
            <dt>서비스 수수료</dt>
            {/* TODO: 서비스 수수료 14%로 책정, 연산 함수 작성 필요! */}
            <dd>11,200원</dd>
          </DescWrapper>
        </Detail>
        <Total>
          <DescWrapper>
            <dt>결제금액</dt>
            <dd>90,200원</dd>
          </DescWrapper>
        </Total>
      </Content>
    </Container>
  );
}

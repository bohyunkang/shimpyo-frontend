import styled from 'styled-components';
import PageSectionTitle from '../../common/title/ui/PageSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 40px;
`;

export default function PaymentMethod() {
  return (
    <Container>
      <div>
        <PageSectionTitle>결제 수단</PageSectionTitle>
        <Content>
          {/* TODO: 카카오페이 로고 이미지로 바껴야 함 */}
          <button type="button">카카오페이</button>
          <label htmlFor="input-check-remember-payment-method">
            <input
              type="checkbox"
              name="input-check-remember-payment-method"
              id="input-check-remember-payment-method"
            />
            이 결제 수단을 다음에도 사용
          </label>
        </Content>
      </div>
      <div>
        <div>
          <PageSectionTitle>결제 이용 동의</PageSectionTitle>
          <input
            type="checkbox"
            name="input-check-remember-payment-method"
            id="input-check-remember-payment-method"
          />
        </div>
        <Content>
          {/* TODO: 하이라이트된 버튼 클릭 시 모달창 보여야 함 */}
          <button type="button">구매자 약관</button>
          ,
          <button type="button">취소 / 이용규정</button>
          ,
          <br />
          <button type="button">개인 정보 수집 / 이용방침</button>
          및
          <br />
          <button type="button">개인정보 제 3자 제공</button>
          을 모두 읽었으며 이에 동의합니다.
        </Content>
      </div>
    </Container>
  );
}

import styled from 'styled-components';
import PageSectionTitle from '../../common/title/ui/PageSectionTitle';

import { Kakao, Naver } from '../../../assets/icons/payment';
import GrayCheckBox from '../../common/input/GrayCheckBox';
import WhiteCheckBox from '../../common/input/WhiteCheckBox';

const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.background};
`;

const MethodContent = styled.div`
  padding: 20px 16px 0px;
`;

const MethodButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;

  margin-bottom: 20px;
`;

const PayButton = styled.button`
  display: block;

  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.textColors.lightGray};
  border-radius: 3px;
`;

const GrayCheckBoxWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  padding-bottom: 30px;
`;

const AgreementCheckBoxWrapper = styled.div`
  position: relative;
`;

const WhiteCheckBoxWrapper = styled.div`
  position: absolute;
  top: 34px;
  right: 7px;
`;

const AgreementContent = styled.div`
  padding: 20px 16px 40px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  button {
    color: ${({ theme }) => theme.colors.primary};

    font-weight: 500;
    text-decoration: underline;
  }
`;

export default function PaymentMethod() {
  return (
    <Container>
      <div>
        <PageSectionTitle>결제 수단</PageSectionTitle>
        <MethodContent>
          <MethodButtonsWrapper>
            <PayButton type="button">
              <img src={Kakao} alt="카카오 페이" />
            </PayButton>
            <PayButton type="button">
              <img src={Naver} alt="네이버 페이" />
            </PayButton>
          </MethodButtonsWrapper>
          <GrayCheckBoxWrapper>
            <GrayCheckBox
              type="checkbox"
              name="input-check-remember-payment-method"
              id="input-check-remember-payment-method"
              text="이 결제 수단을 다음에도 사용"
            />
          </GrayCheckBoxWrapper>
        </MethodContent>
      </div>
      <div>
        <AgreementCheckBoxWrapper>
          <PageSectionTitle>결제 이용 동의</PageSectionTitle>
          <WhiteCheckBoxWrapper>
            <WhiteCheckBox
              type="checkbox"
              name="input-check-remember-payment-method"
              id="input-check-remember-payment-method"
              width="22px"
              height="22px"
            />
          </WhiteCheckBoxWrapper>
        </AgreementCheckBoxWrapper>
        <AgreementContent>
          {/* TODO: 하이라이트된 버튼 클릭 시 모달창 보여야 함 */}
          <button type="button">구매자 약관</button>
          ,
          {' '}
          <button type="button">취소 / 이용규정</button>
          ,
          <br />
          <button type="button">개인 정보 수집 / 이용방침</button>
          {' '}
          및
          <br />
          <button type="button">개인정보 제 3자 제공</button>
          을 모두 읽었으며 이에 동의합니다.
        </AgreementContent>
      </div>
    </Container>
  );
}

import styled from 'styled-components';

import BackButton from '../common/button/BackButton';
import ProcessTitle from '../common/title/ProcessTitle';
import ReservationInformation from './payment/ReservationInformation';
import PaymentAmount from './payment/PaymentAmount';
import PaymentMethodAndAgreement from './payment/PaymentMethodAndAgreement';
import CompletionButton from './CompletionButton';

import useReservationStore from '../../hooks/useReservationStore';
import ScrollToTop from '../common/ScrollToTop';

const Container = styled.article`
  position: relative;
  padding-bottom: 111px;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  z-index: 1;
`;

export default function PaymentDetail() {
  const reservationStore = useReservationStore();

  const handleClickNext = () => {
    reservationStore.goToNextProcess();
  };

  return (
    <Container>
      <ScrollToTop />
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="결제하기" />
      <ReservationInformation />
      {/* TODO: 쿠폰 기능 구현 시 활성화 */}
      {/* <PaymentPromotion /> */}
      <PaymentAmount />
      <PaymentMethodAndAgreement />
      <CompletionButton
        // 텍스트 금액에 맞춰 달라지게 구현해야 함
        text="85,200원 결제하기"
        onClick={handleClickNext}
      />
    </Container>
  );
}

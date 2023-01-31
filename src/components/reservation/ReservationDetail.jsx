import styled from 'styled-components';

import BackButton from '../common/button/BackButton';
import ProcessTitle from '../common/title/ProcessTitle';
import BookerInformation from './BookerInformation';
import CompletionButton from './CompletionButton';
import Requirement from './Requirement';
import SelectedProgram from './SelectedProgram';
import TotalPrice from './TotalPrice';

import useReservationStore from '../../hooks/useReservationStore';

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

export default function ReservationDetail() {
  const reservationStore = useReservationStore();

  const handleClickNext = () => {
    reservationStore.goToNextProcess();
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="예약하기" />
      <SelectedProgram />
      <BookerInformation />
      <Requirement />
      <TotalPrice />
      <CompletionButton
        text="다음"
        onClick={handleClickNext}
      />
    </Container>
  );
}

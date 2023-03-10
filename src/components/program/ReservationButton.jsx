import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryButton from '../common/button/ui/PrimaryButton';

const Container = styled.article`
  width: 390px;
  height: 111px;
  padding: 20px 16px 30px;
  
  position: fixed;
  bottom: 0;
  z-index: 1;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function ReservationButton({ id }) {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(`/reservation?program=${id}`);
  };

  return (
    <Container>
      <PrimaryButton
        type="button"
        onClick={handleClickButton}
      >
        예약하기
      </PrimaryButton>
    </Container>
  );
}

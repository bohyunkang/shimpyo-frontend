import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { WhiteBack, BlackBack } from '../../../assets/icons/button';

import useReservationStore from '../../../hooks/useReservationStore';

const Button = styled.button`
  width: 11px;
  height: 19px;

  background-image: ${(props) => (props.color === 'white' ? `url(${WhiteBack})` : `url(${BlackBack})`)};
  background-repeat: no-repeat;
`;

export default function BackButton({ color }) {
  const reservationStore = useReservationStore();

  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const handleClickBack = () => {
    if (pathname.startsWith('/reservation')) {
      if (reservationStore.currentProcess === 0) {
        navigate(-1);
        return;
      }

      reservationStore.goToPreviousProcess();
      return;
    }

    navigate(-1);
  };

  return (
    <Button
      type="button"
      name="뒤로 가기 버튼"
      color={color}
      onClick={handleClickBack}
    />
  );
}

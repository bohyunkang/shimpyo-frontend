import useReservationStore from '../../hooks/useReservationStore';

import ParticipantSetting from './ParticipantSetting';
import GuestRoomSetting from './GuestRoomSetting';
import ReservationProgress from './ReservationProgress';
import PaymentDetail from './PaymentDetail';
import ReservationSuccess from './ReservationSuccess';

const PROCESS_OF_RESERVATION = {
  0: <ParticipantSetting />,
  1: <GuestRoomSetting />,
  2: <ReservationProgress />,
  3: <PaymentDetail />,
  4: <ReservationSuccess />,
};

export default function Reservation() {
  const reservationStore = useReservationStore();

  const { currentProcess } = reservationStore;

  return (
    PROCESS_OF_RESERVATION[currentProcess]
  );
}

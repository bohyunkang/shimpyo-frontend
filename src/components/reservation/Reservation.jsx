import useReservationStore from '../../hooks/useReservationStore';

import ParticipantSetting from './ParticipantSetting';
import GuestRoomSetting from './GuestRoomSetting';
import ReservationDetail from './ReservationDetail';

const PROCESS_OF_RESERVATION = {
  0: <ParticipantSetting />,
  1: <GuestRoomSetting />,
  2: <ReservationDetail />,
};

export default function Reservation() {
  const reservationStore = useReservationStore();

  const { currentProcess } = reservationStore;

  return (
    PROCESS_OF_RESERVATION[currentProcess]
  );
}

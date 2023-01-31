import useStore from './useStore';
import { reservationStore } from '../stores/ReservationStore';

export default function useProgramStore() {
  return useStore(reservationStore);
}

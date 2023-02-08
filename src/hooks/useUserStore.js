import useStore from './useStore';
import { userStore } from '../stores/UserStore';

export default function useProgramStore() {
  return useStore(userStore);
}

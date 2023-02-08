import useStore from './useStore';
import { loginFormStore } from '../stores/LoginFormStore';

export default function useProgramStore() {
  return useStore(loginFormStore);
}

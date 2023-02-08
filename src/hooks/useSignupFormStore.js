import useStore from './useStore';
import { signupFormStore } from '../stores/SignupFormStore';

export default function useProgramStore() {
  return useStore(signupFormStore);
}

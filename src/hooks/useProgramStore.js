import useStore from './useStore';
import { programStore } from '../stores/ProgramStore';

export default function useProgramStore() {
  return useStore(programStore);
}

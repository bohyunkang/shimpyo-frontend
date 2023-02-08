import { useEffect } from 'react';

import useUserStore from '../../hooks/useUserStore';
import useSignupFormStore from '../../hooks/useSignupFormStore';

import NameSetting from './NameSetting';
import EmailSetting from './EmailSetting';
import PasswordSetting from './PasswordSetting';
import NicknameSetting from './NicknameSetting';
import SignupSuccess from './SignupSuccess';

const PROCESS_OF_SIGNUP = {
  0: <NameSetting />,
  1: <EmailSetting />,
  2: <PasswordSetting />,
  3: <NicknameSetting />,
  4: <SignupSuccess />,
};

export default function SignupForm() {
  const userStore = useUserStore();
  const signupFormStore = useSignupFormStore();

  const { currentProcess } = signupFormStore;

  useEffect(() => {
    userStore.resetSignupStatus();
    signupFormStore.reset();
  }, []);

  return (
    PROCESS_OF_SIGNUP[currentProcess]
  );
}

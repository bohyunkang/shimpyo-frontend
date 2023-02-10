import { useEffect } from 'react';

import useUserStore from '../../hooks/useUserStore';
import useLoginFormStore from '../../hooks/useLoginFormStore';

import Layout from '../../layouts/Layout';
import LoginForm from '../../components/login/LoginForm';

export default function LoginPage() {
  const userStore = useUserStore();
  const loginFormStore = useLoginFormStore();

  useEffect(() => {
    userStore.resetLoginStatus();
    loginFormStore.reset();
  }, []);

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}

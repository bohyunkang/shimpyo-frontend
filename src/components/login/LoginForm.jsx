import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';

import useLoginFormStore from '../../hooks/useLoginFormStore';
import useUserStore from '../../hooks/useUserStore';

const Container = styled.article`
  input {
    border: 1px solid red;
  }
`;

export default function LoginForm() {
  const userStore = useUserStore();
  const loginFormStore = useLoginFormStore();
  const { email, password } = loginFormStore.fields;

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    loginFormStore.validate();

    if (!loginFormStore.isValidateSuccessful) {
      return;
    }

    const { accessToken } = await userStore.login({ email, password });

    if (userStore.isLoginFailed) {
      return;
    }

    setAccessToken(accessToken);

    navigate('/');
  };

  const handleChangeEmail = (e) => {
    loginFormStore.changeEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    loginFormStore.changePassword(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmitLogin}>
        <div>
          <label htmlFor="input-email">
            이메일
          </label>
          <input
            type="text"
            name="email"
            id="input-email"
            value={loginFormStore.fields.email}
            // error={loginFormStore.errors.email || userStore.isLoginFailed}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="input-password">
            비밀번호
          </label>
          <input
            type="text"
            name="password"
            id="input-password"
            value={loginFormStore.fields.password}
            // error={loginFormStore.errors.password || userStore.isLoginFailed}
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit">로그인하기</button>
      </form>
      <Link to="/signup">회원가입하기</Link>
    </Container>
  );
}

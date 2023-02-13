import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import useLoginFormStore from '../../hooks/useLoginFormStore';
import useUserStore from '../../hooks/useUserStore';

import { Logo } from '../../assets/icons/common';
import PrimaryButton from '../common/button/ui/PrimaryButton';

const Container = styled.article`
  padding-inline: 16px;
`;

const TitleSection = styled.div`
  padding-block: 94px 160px;

  h1 {
    padding-top: 26px;

    font-size: 32px;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: -2px;
    white-space: pre-line;

    color: ${(({ theme }) => theme.textColors.default)};
  }

  strong {
    color: ${(({ theme }) => theme.textColors.primary)};
  }
`;

const InputWrapper = styled.div`
  position: relative;

  * {
    display: block;
  }

  & + & {
    margin-block: 10px 30px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 20px;

  font-size: 12px;
  font-weight: 600;

  color: ${(({ theme }) => theme.textColors.lightGray)};
`;

const Input = styled.input`
  width: 100%;
  height: 80px;

  padding: 36px 20px 16px;

  font-size: 22px;
  
  color: ${(props) => (props.isError ? props.theme.colors.error : props.theme.textColors.button)};
  background-color: ${(props) => (props.isError ? props.theme.colors.lightError : props.theme.colors.cardBackground)};
  
  border: ${(props) => (props.isError ? `1px solid ${props.theme.colors.error}` : 'none')};
  border-radius: 4px;
`;

const Message = styled.p`
  margin-top: 12px;

  font-size: 12px;
  text-align: right;

  color: ${(props) => (props.isError ? props.theme.colors.error : props.theme.textColors.default)};
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  font-size: 12px;
`;

const SignupLink = styled(Link)`
  color: ${(({ theme }) => theme.textColors.button)};
  text-decoration: underline;
`;

const HomeLink = styled(Link)`
  color: ${(({ theme }) => theme.textColors.lightGray)};
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

    navigate('/programs');
  };

  const handleChangeEmail = (e) => {
    loginFormStore.changeEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    loginFormStore.changePassword(e.target.value);
  };

  return (
    <Container>
      <TitleSection>
        <img src={Logo} alt="쉼표 로고" />
        <h1>
          <strong>
            쉼표
          </strong>
          와 함께
          <br />
          멋진 힐링을 펼쳐보세요.
        </h1>
      </TitleSection>
      <form onSubmit={handleSubmitLogin}>
        <InputWrapper>
          <Label htmlFor="input-email">
            이메일
          </Label>
          <Input
            type="text"
            name="email"
            id="input-email"
            value={loginFormStore.fields.email}
            isError={loginFormStore.errors.email || userStore.isLoginFailed}
            onChange={handleChangeEmail}
          />
          {loginFormStore.errors.email
          && (
            <Message isError>
              {loginFormStore.errors.email}
            </Message>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="input-password">
            비밀번호
          </Label>
          <Input
            type="text"
            name="password"
            id="input-password"
            value={loginFormStore.fields.password}
            isError={loginFormStore.errors.password || userStore.isLoginFailed}
            onChange={handleChangePassword}
          />
          {loginFormStore.errors.password
          && (
            <Message isError>
              {loginFormStore.errors.password}
            </Message>
          )}
        </InputWrapper>
        <PrimaryButton type="submit">로그인하기</PrimaryButton>
      </form>
      <LinkWrapper>
        <SignupLink to="/signup">회원가입 하기</SignupLink>
        <HomeLink to="/">둘러보기</HomeLink>
      </LinkWrapper>
    </Container>
  );
}

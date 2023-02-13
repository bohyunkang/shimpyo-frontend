import { Link } from 'react-router-dom';

import styled from 'styled-components';

import useSignupFormStore from '../../hooks/useSignupFormStore';
import MainTitle from '../common/title/MainTitle';

const Container = styled.article`
  padding: 154px 16px 0;
`;

const Message = styled.p`
  margin-block: 20px 32px;

  color: ${(({ theme }) => theme.textColors.button)};
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 20px;
  padding-block: 16px;
  text-align: center;

  border: 1px solid red;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.textColors.primary};

  font-size: 18px;
  font-weight: 600;
`;

export default function SignupSuccess() {
  const signupFormStore = useSignupFormStore();

  return (
    <Container>
      <MainTitle title={`${signupFormStore.fields.nickname}님\n가입이 완료되었어요.`} />
      <Message>감사합니다. 쉼표와 함께 즐거운 힐링을 만들어가요.</Message>
      <StyledLink to="/login">힐링하러 가기</StyledLink>
    </Container>
  );
}

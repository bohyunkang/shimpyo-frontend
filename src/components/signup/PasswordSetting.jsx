import styled from 'styled-components';

import BackButton from '../common/button/BackButton';
import ProcessTitle from '../common/title/ProcessTitle';

import useSignupFormStore from '../../hooks/useSignupFormStore';
import MainTitle from '../common/title/MainTitle';
import PrimaryButton from '../common/button/ui/PrimaryButton';

const Container = styled.article`
  position: relative;
  padding-bottom: 111px;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  z-index: 1;
`;

const Content = styled.div`
  padding: 100px 16px 0;
`;

const InputWrapper = styled.div`
  position: relative;

  margin-block: 50px 30px;

  * {
    display: block;
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

  ::placeholder {
    color: ${({ theme }) => theme.colors.miniBorder};
  }
`;

const Message = styled.p`
  margin-top: 12px;

  font-size: 12px;
  text-align: right;

  color: ${(props) => (props.isError ? props.theme.colors.error : props.theme.textColors.default)};
`;

export default function PasswordSetting() {
  const signupFormStore = useSignupFormStore();

  const handleChangePassword = (e) => {
    signupFormStore.changePassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    signupFormStore.changeConfirmPassword(e.target.value);
  };

  const handleClickNext = () => {
    signupFormStore.validatePassword();
    signupFormStore.validateConfirmPassword();

    if (!signupFormStore.checkValidateSuccessful('password')) {
      return;
    }

    signupFormStore.goToNextProcess();
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="비밀번호" />
      <Content>
        <MainTitle title={'거의 다 왔네요.\n비밀번호만 설정하면 완료!'} />
        <InputWrapper>
          <Label htmlFor="input-password">비밀번호</Label>
          <Input
            type="text"
            name="password"
            id="input-password"
            placeholder="영문, 숫자, 특수문자, 8자 이상"
            value={signupFormStore.fields.password}
            // error={signupFormStore.errors.password}
            onChange={handleChangePassword}
          />
          <Message>비밀번호는 영문, 숫자, 특수문자를 토함, 8자 이상이어야 합니다.</Message>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="input-confirm-password">비밀번호 확인</Label>
          <Input
            type="text"
            name="confirm-password"
            id="input-confirm-password"
            placeholder="동일한 비밀번호를 입력해 주세요"
            value={signupFormStore.fields.confirmPassword}
            // error={signupFormStore.errors.confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
        </InputWrapper>
        <PrimaryButton
          type="button"
          onClick={handleClickNext}
        >
          다음
        </PrimaryButton>
      </Content>
    </Container>
  );
}

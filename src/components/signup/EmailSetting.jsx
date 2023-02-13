import styled from 'styled-components';
import useSignupFormStore from '../../hooks/useSignupFormStore';
import BackButton from '../common/button/BackButton';
import PrimaryButton from '../common/button/ui/PrimaryButton';
import MainTitle from '../common/title/MainTitle';
import ProcessTitle from '../common/title/ProcessTitle';

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
`;

const Message = styled.p`
  margin-top: 12px;

  font-size: 12px;
  text-align: right;

  color: ${(props) => (props.isError ? props.theme.colors.error : props.theme.textColors.default)};
`;

export default function EmailSetting() {
  const signupFormStore = useSignupFormStore();

  const handleChangeEmail = (e) => {
    signupFormStore.changeEmail(e.target.value);
  };

  const handleClickNext = () => {
    signupFormStore.validateEmail();

    if (!signupFormStore.checkValidateSuccessful('email')) {
      return;
    }

    signupFormStore.goToNextProcess();
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="이메일" />
      <Content>
        <MainTitle title={'반갑습니다!\n이메일을 알려주세요.'} />
        <InputWrapper>
          <Label htmlFor="input-email">이메일</Label>
          <Input
            type="text"
            name="email"
            id="input-email"
            value={signupFormStore.fields.email}
            isError={signupFormStore.errors.email}
            onChange={handleChangeEmail}
          />
          {signupFormStore.errors.email
          && (
            <Message isError>
              {signupFormStore.errors.email}
            </Message>
          )}
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

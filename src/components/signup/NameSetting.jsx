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

export default function NameSetting() {
  const signupFormStore = useSignupFormStore();

  const handleChangeName = (e) => {
    signupFormStore.changeName(e.target.value);
  };

  const handleClickNext = () => {
    signupFormStore.validateName();

    if (!signupFormStore.checkValidateSuccessful('name')) {
      return;
    }

    signupFormStore.goToNextProcess();
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="회원가입" />
      <Content>
        <MainTitle title={'안녕하세요\n이름이 어떻게 되세요?'} />
        <InputWrapper>
          <Label htmlFor="input-name">이름</Label>
          <Input
            type="text"
            name="name"
            id="input-name"
            value={signupFormStore.fields.name}
            isError={signupFormStore.errors.name}
            onChange={handleChangeName}
          />
          {signupFormStore.errors.name
          && (
            <Message isError>
              {signupFormStore.errors.name}
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

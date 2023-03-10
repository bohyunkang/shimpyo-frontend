import styled from 'styled-components';

import useSignupFormStore from '../../hooks/useSignupFormStore';
import useUserStore from '../../hooks/useUserStore';
import PrimaryButton from '../common/button/ui/PrimaryButton';

import MainTitle from '../common/title/MainTitle';

const Container = styled.article`
  padding: 154px 16px 0;
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

export default function NicknameSetting() {
  const signupFormStore = useSignupFormStore();
  const userStore = useUserStore();
  const {
    name, email, password, confirmPassword, nickname,
  } = signupFormStore.fields;

  const handleChangeNickname = (e) => {
    signupFormStore.changeNickname(e.target.value);
  };

  const handleClickNext = async () => {
    signupFormStore.validateNickname();

    if (!signupFormStore.checkValidateSuccessful('nickname')) {
      return;
    }

    if (!signupFormStore.isValidateSuccessful) {
      return;
    }

    await userStore.signup({
      name, email, password, confirmPassword, nickname,
    });

    if (userStore.isSignupFailed) {
      return;
    }

    signupFormStore.goToNextProcess();
  };

  return (
    <Container>
      <MainTitle title={'????????? ????????? ?????????????\n???????????? ??????????????????.'} />
      <InputWrapper>
        <Label htmlFor="input-nickname">?????????</Label>
        <Input
          type="text"
          name="nickname"
          id="input-nickname"
          value={signupFormStore.fields.nickname}
          // error={signupFormStore.errors.nickname}
          onChange={handleChangeNickname}
        />
        <Message>??????/??????/??????/????????????/??????????????? ????????? ??? ????????????.</Message>
      </InputWrapper>
      <PrimaryButton
        type="button"
        onClick={handleClickNext}
      >
        ??????
      </PrimaryButton>
    </Container>
  );
}

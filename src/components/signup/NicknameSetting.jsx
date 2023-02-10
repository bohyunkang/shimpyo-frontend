import useSignupFormStore from '../../hooks/useSignupFormStore';
import useUserStore from '../../hooks/useUserStore';

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
    <div>
      <h2>
        뭐라고 부르면 좋을까요?
        <br />
        닉네임을 설정해 주세요.
      </h2>
      <label htmlFor="input-nickname">닉네임</label>
      <input
        type="text"
        name="nickname"
        id="input-nickname"
        value={signupFormStore.fields.nickname}
        // error={signupFormStore.errors.nickname}
        onChange={handleChangeNickname}
      />
      <p>한글/영어/숫자/특수문자/띄어쓰기를 사용할 수 있습니다.</p>
      <button
        type="button"
        onClick={handleClickNext}
      >
        다음
      </button>
    </div>
  );
}

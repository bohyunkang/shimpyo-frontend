import useSignupFormStore from '../../hooks/useSignupFormStore';

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
    <div>
      <h2>
        반갑습니다!
        <br />
        이메일을 알려주세요.
      </h2>
      <label htmlFor="input-email">이메일</label>
      <input
        type="text"
        name="email"
        id="input-email"
        value={signupFormStore.fields.email}
        // error={signupFormStore.errors.email}
        onChange={handleChangeEmail}
      />
      <button
        type="button"
        onClick={handleClickNext}
      >
        다음
      </button>
    </div>
  );
}

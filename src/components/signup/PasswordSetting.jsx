import useSignupFormStore from '../../hooks/useSignupFormStore';

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
    <div>
      <h2>
        거의 다 왔네요.
        <br />
        비밀번호만 설정하면 완료!
      </h2>
      <label htmlFor="input-password">비밀번호</label>
      <input
        type="text"
        name="password"
        id="input-password"
        placeholder="영문, 숫자, 특수문자, 8자 이상"
        value={signupFormStore.fields.password}
        // error={signupFormStore.errors.password}
        onChange={handleChangePassword}
      />
      <p>비밀번호는 영문, 숫자, 특수문자를 토함, 8자 이상이어야 합니다.</p>
      <label htmlFor="input-confirm-password">비밀번호 확인</label>
      <input
        type="text"
        name="confirm-password"
        id="input-confirm-password"
        placeholder="동일한 비밀번호를 입력해 주세요"
        value={signupFormStore.fields.confirmPassword}
        // error={signupFormStore.errors.confirmPassword}
        onChange={handleChangeConfirmPassword}
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

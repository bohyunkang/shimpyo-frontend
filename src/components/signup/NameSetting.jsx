import useSignupFormStore from '../../hooks/useSignupFormStore';

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
    <div>
      <h2>
        안녕하세요!
        <br />
        이름이 어떻게 되세요?
      </h2>
      <label htmlFor="input-name">이름</label>
      <input
        type="text"
        name="name"
        id="input-name"
        value={signupFormStore.fields.name}
        // error={signupFormStore.errors.name}
        onChange={handleChangeName}
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

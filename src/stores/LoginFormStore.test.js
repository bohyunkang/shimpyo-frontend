import LoginFormStore from './LoginFormStore';

const context = describe;

describe('LoginFormStore', () => {
  let loginFormStore;

  beforeEach(() => {
    loginFormStore = new LoginFormStore();
  });

  describe('changeEmail', () => {
    it('이메일을 입력하는 경우', () => {
      loginFormStore.changeEmail('healing@shimpyo.com');

      expect(loginFormStore.fields.email).toBe('healing@shimpyo.com');
    });
  });

  describe('changePassword', () => {
    it('비밀번호를 입력하는 경우', () => {
      loginFormStore.changePassword('Healing1234!');

      expect(loginFormStore.fields.password).toBe('Healing1234!');
    });
  });

  describe('reset', () => {
    context('필드를 리셋하는 경우', () => {
      it('모든 필드가 비워져야 한다.', () => {
        loginFormStore.changeEmail('healing@shimpyo.com');
        loginFormStore.changePassword('Healing1234!');

        loginFormStore.reset();

        expect(loginFormStore.fields.email && loginFormStore.fields.password).toBeFalsy();
      });
    });
  });

  describe('validate', () => {
    context('이메일을 입력한 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        loginFormStore.changeEmail('healing@shimpyo.com');

        loginFormStore.validate();

        expect(loginFormStore.errors.email).toBeFalsy();
      });
    });

    context('이메일을 입력하지 않은 경우', () => {
      it('이메일을 입력하라는 에러 메시지가 출력된다.', () => {
        loginFormStore.changeEmail('');

        loginFormStore.validate();

        expect(loginFormStore.errors.email).toBeTruthy();
        expect(loginFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('비밀번호를 입력한 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        loginFormStore.changePassword('Healing1234!');

        loginFormStore.validate();

        expect(loginFormStore.errors.password).toBeFalsy();
      });
    });

    context('비밀번호를 입력하지 않은 경우', () => {
      it('비밀번호를 입력하라는 에러 메시지가 출력된다.', () => {
        loginFormStore.changePassword('');

        loginFormStore.validate();

        expect(loginFormStore.errors.password).toBeTruthy();
        expect(loginFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('이메일과 비밀번호 둘 다 입력하지 않은 경우', () => {
      it('이메일과 비밀번호를 입력하라는 에러 메시지가 출력된다.', () => {
        loginFormStore.changeEmail('');
        loginFormStore.changePassword('');

        loginFormStore.validate();

        expect(loginFormStore.errors.all).toBeTruthy();
        expect(loginFormStore.isValidateSuccessful).toBeFalsy();
      });
    });
  });
});

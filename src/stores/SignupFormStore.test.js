import SignupFormStore from './SignupFormStore';

const context = describe;

describe('SignupFormStore', () => {
  let signupFormStore;

  beforeEach(() => {
    signupFormStore = new SignupFormStore();
  });

  describe('changeName', () => {
    it('이름을 입력하는 경우', () => {
      signupFormStore.changeName('강힐링');

      expect(signupFormStore.fields.name).toBe('강힐링');
    });
  });

  describe('changeEmail', () => {
    it('이메일을 입력하는 경우', () => {
      signupFormStore.changeEmail('healing@shimpyo.com');

      expect(signupFormStore.fields.email).toBe('healing@shimpyo.com');
    });
  });

  describe('changePassword', () => {
    it('비밀번호를 입력하는 경우', () => {
      signupFormStore.changePassword('Healing1234!');

      expect(signupFormStore.fields.password).toBe('Healing1234!');
    });
  });

  describe('changeConfirmPassword', () => {
    it('비밀번호를 다시 입력하는 경우', () => {
      signupFormStore.changeConfirmPassword('Healing1234!');

      expect(signupFormStore.fields.confirmPassword).toBe('Healing1234!');
    });
  });

  describe('validateName', () => {
    context('이름을 제대로 입력한 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        signupFormStore.changeName('강힐링');

        signupFormStore.validateName();

        expect(signupFormStore.errors.name).toBeFalsy();
      });
    });

    context('이름을 입력하지 않은 경우', () => {
      it('이름을 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changeName('');

        signupFormStore.validateName();

        expect(signupFormStore.errors.name).toBeTruthy();
        expect(signupFormStore.errors.name).toBe('이름을 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('이름이 두 글자 미만인 경우', () => {
      it('이름을 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changeName('강');

        signupFormStore.validateName();

        expect(signupFormStore.errors.name).toBeTruthy();
        expect(signupFormStore.errors.name).toBe('이름은 최소 두 글자 이상이어야 합니다.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });
  });

  describe('validateEmail', () => {
    context('이메일을 제대로 입력한 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        signupFormStore.changeEmail('healing@shimpyo.com');

        signupFormStore.validateEmail();

        expect(signupFormStore.errors.email).toBeFalsy();
      });
    });

    context('이메일을 입력하지 않은 경우', () => {
      it('이메일을 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changeEmail('');

        signupFormStore.validateEmail();

        expect(signupFormStore.errors.email).toBeTruthy();
        expect(signupFormStore.errors.email).toBe('이메일을 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('이메일이 형식이 아닌 경우', () => {
      it('올바른 이메일이 아니라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changeEmail('healing');

        signupFormStore.validateEmail();

        expect(signupFormStore.errors.email).toBeTruthy();
        expect(signupFormStore.errors.email).toBe('이메일이 올바르지 않습니다. 다시 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });
  });

  describe('validatePassword', () => {
    context('비밀번호를 제대로 입력한 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        signupFormStore.changePassword('Healing1234!');

        signupFormStore.validatePassword();

        expect(signupFormStore.errors.password).toBeFalsy();
      });
    });

    context('비밀번호를 입력하지 않은 경우', () => {
      it('비밀번호를 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('');

        signupFormStore.validatePassword();

        expect(signupFormStore.errors.password).toBeTruthy();
        expect(signupFormStore.errors.password).toBe('비밀번호를 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('짧은 비밀번호를 입력한 경우', () => {
      it('올바른 비밀번호가 아니라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('Heal');

        signupFormStore.validatePassword();

        expect(signupFormStore.errors.password).toBeTruthy();
        expect(signupFormStore.errors.password).toBe('비밀번호가 올바르지 않습니다. 다시 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('소문자가 없는 경우', () => {
      it('올바른 비밀번호가 아니라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('HEALING1234!');

        signupFormStore.validatePassword();

        expect(signupFormStore.errors.password).toBeTruthy();
        expect(signupFormStore.errors.password).toBe('비밀번호가 올바르지 않습니다. 다시 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('대문자가 없는 경우', () => {
      it('올바른 비밀번호가 아니라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('healing1234!');

        signupFormStore.validatePassword();

        expect(signupFormStore.errors.password).toBeTruthy();
        expect(signupFormStore.errors.password).toBe('비밀번호가 올바르지 않습니다. 다시 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('숫자가 없는 경우', () => {
      it('올바른 비밀번호가 아니라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('healing!');

        signupFormStore.validatePassword();

        expect(signupFormStore.errors.password).toBeTruthy();
        expect(signupFormStore.errors.password).toBe('비밀번호가 올바르지 않습니다. 다시 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('특수문자가 없는 경우', () => {
      it('올바른 비밀번호가 아니라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('healing1234');

        signupFormStore.validatePassword();

        expect(signupFormStore.errors.password).toBeTruthy();
        expect(signupFormStore.errors.password).toBe('비밀번호가 올바르지 않습니다. 다시 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });
  });

  describe('validateConfirmPassword', () => {
    context('비밀번호 확인을 제대로 입력한 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        signupFormStore.changePassword('Healing1234!');
        signupFormStore.changeConfirmPassword('Healing1234!');

        signupFormStore.validateConfirmPassword();

        expect(signupFormStore.errors.confirmPassword).toBeFalsy();
      });
    });

    context('비밀번호 확인을 입력하지 않은 경우', () => {
      it('비밀번호를 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('Healing1234!');
        signupFormStore.changeConfirmPassword('');

        signupFormStore.validateConfirmPassword();

        expect(signupFormStore.errors.confirmPassword).toBeTruthy();
        expect(signupFormStore.errors.confirmPassword).toBe('비밀번호를 다시 한번 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('비밀번호와 비밀번호 재확인이 일치하는 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        signupFormStore.changePassword('Healing1234!');
        signupFormStore.changeConfirmPassword('Healing1234!');

        signupFormStore.validateConfirmPassword();

        expect(signupFormStore.errors.confirmPassword).toBeFalsy();
      });
    });

    context('비밀번호와 비밀번호 재확인이 일치하지 않는 경우', () => {
      it('비밀번호가 일치하지 않는다는 에러 메시지가 출력된다.', () => {
        signupFormStore.changePassword('Healing1234!');
        signupFormStore.changeConfirmPassword('Abcd1234!');

        signupFormStore.validateConfirmPassword();

        expect(signupFormStore.errors.confirmPassword).toBeTruthy();
        expect(signupFormStore.errors.confirmPassword).toBe('비밀번호가 일치하지 않습니다.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });
  });

  describe('validateNickname', () => {
    context('닉네임을 제대로 입력한 경우', () => {
      it('에러 메시지가 존재하지 않는다.', () => {
        signupFormStore.changeNickname('힐링이필요해');

        signupFormStore.validateNickname();

        expect(signupFormStore.errors.nickname).toBeFalsy();
      });
    });

    context('닉네임을 입력하지 않은 경우', () => {
      it('닉네임을 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changeNickname('');

        signupFormStore.validateNickname();

        expect(signupFormStore.errors.nickname).toBeTruthy();
        expect(signupFormStore.errors.nickname).toBe('쉼표에서 사용하실 닉네임을 입력해 주세요.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('닉네임이 두 글자 미만인 경우', () => {
      it('닉네임은 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changeNickname('힐');

        signupFormStore.validateNickname();

        expect(signupFormStore.errors.nickname).toBeTruthy();
        expect(signupFormStore.errors.nickname).toBe('닉네임은 최소 두 글자 이상, 여덟 글자 이하여야 합니다.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });

    context('닉네임이 여덟 글자 초과인 경우', () => {
      it('이메일을 입력하라는 에러 메시지가 출력된다.', () => {
        signupFormStore.changeNickname('힐링이필요해난네가필요해');

        signupFormStore.validateNickname();

        expect(signupFormStore.errors.nickname).toBeTruthy();
        expect(signupFormStore.errors.nickname).toBe('닉네임은 최소 두 글자 이상, 여덟 글자 이하여야 합니다.');
        expect(signupFormStore.isValidateSuccessful).toBeFalsy();
      });
    });
  });
});

import { apiService } from '../services/ApiService';

import Store from './Store';

export default class SignupFormStore extends Store {
  constructor() {
    super();

    this.currentProcess = 0;

    this.fields = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    };

    this.errors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    };

    this.errorMessages = {
      name: {
        empty: '이름을 입력해 주세요.',
        invalid: '이름은 최소 두 글자 이상이어야 합니다.',
      },
      email: {
        empty: '이메일을 입력해 주세요.',
        invalid: '이메일이 올바르지 않습니다. 다시 입력해 주세요.',
        taken: '해당 이메일은 사용할 수 없습니다.',
      },
      password: {
        empty: '비밀번호를 입력해 주세요.',
        invalid: '비밀번호가 올바르지 않습니다. 다시 입력해 주세요.',
      },
      confirmPassword: {
        empty: '비밀번호를 다시 한번 입력해 주세요.',
        notMatched: '비밀번호가 일치하지 않습니다.',
      },
      nickname: {
        empty: '쉼표에서 사용하실 닉네임을 입력해 주세요.',
        invalid: '닉네임은 최소 두 글자 이상, 여덟 글자 이하여야 합니다.',
      },
    };

    this.patterns = {
      name: /^.{2,}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      nickname: /^.{3,8}$/,
    };
  }

  goToNextProcess() {
    this.currentProcess += 1;

    this.publish();
  }

  goToPreviousProcess() {
    this.currentProcess -= 1;

    this.publish();
  }

  changeName(name) {
    this.fields.name = name;
    this.validateName();

    this.publish();
  }

  changeEmail(email) {
    this.fields.email = email;
    this.validateEmail();

    this.publish();
  }

  changePassword(password) {
    this.fields.password = password;
    this.validatePassword();

    this.publish();
  }

  changeConfirmPassword(confirmPassword) {
    this.fields.confirmPassword = confirmPassword;
    this.validateConfirmPassword();

    this.publish();
  }

  changeNickname(nickname) {
    this.fields.nickname = nickname;
    this.validateNickname();

    this.publish();
  }

  reset() {
    this.currentProcess = 0;

    this.fields = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    };

    this.errors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    };

    this.publish();
  }

  validate() {
    this.validateName();
    this.validateEmail();
    this.validatePassword();
    this.validateConfirmPassword();
    this.validateNickname();

    this.publish();
  }

  validateName() {
    if (!this.fields.name.length) {
      this.errors.name = this.errorMessages.name.empty;

      return;
    }

    if (!this.patterns.name.test(this.fields.name)) {
      this.errors.name = this.errorMessages.name.invalid;

      return;
    }

    this.errors.name = '';
  }

  async validateEmail() {
    if (!this.fields.email.length) {
      this.errors.email = this.errorMessages.email.empty;

      return;
    }

    if (!this.patterns.email.test(this.fields.email)) {
      this.errors.email = this.errorMessages.email.invalid;

      return;
    }

    const count = await apiService.countUser(this.fields.email);

    if (count !== 0) {
      this.errors.email = this.errorMessages.email.taken;

      return;
    }

    this.errors.email = '';
  }

  validatePassword() {
    if (!this.fields.password.length) {
      this.errors.password = this.errorMessages.password.empty;

      return;
    }

    if (!this.patterns.password.test(this.fields.password)) {
      this.errors.password = this.errorMessages.password.invalid;

      return;
    }

    this.errors.password = '';
  }

  validateConfirmPassword() {
    if (!this.fields.confirmPassword.length) {
      this.errors.confirmPassword = this.errorMessages.confirmPassword.empty;

      return;
    }

    if (this.fields.confirmPassword !== this.fields.password) {
      this.errors.confirmPassword = this.errorMessages.confirmPassword.notMatched;

      return;
    }

    this.errors.confirmPassword = '';
  }

  validateNickname() {
    if (!this.fields.nickname.length) {
      this.errors.nickname = this.errorMessages.nickname.empty;

      return;
    }

    if (!this.patterns.nickname.test(this.fields.nickname)) {
      this.errors.nickname = this.errorMessages.nickname.invalid;

      return;
    }

    this.errors.nickname = '';
  }

  checkValidateSuccessful(target) {
    if (target === 'password') {
      return this.errors.password.length === 0 && this.errors.confirmPassword.length === 0;
    }

    return this.errors[target].length === 0;
  }

  get errorMessage() {
    if (this.errors.name) {
      return this.errors.name;
    }

    if (this.errors.email) {
      return this.errors.email;
    }

    if (this.errors.password) {
      return this.errors.password;
    }

    if (this.errors.confirmPassword) {
      return this.errors.confirmPassword;
    }

    if (this.errors.nickname) {
      return this.errors.nickname;
    }

    return '';
  }

  get isValidateSuccessful() {
    return !Object.values(this.errors).some((error) => error);
  }
}

export const signupFormStore = new SignupFormStore();

import Store from './Store';

export default class LoginFormStore extends Store {
  constructor() {
    super();

    this.fields = {
      email: '',
      password: '',
    };

    this.errors = {
      email: '',
      password: '',
      all: '',
    };

    this.errorMessages = {
      email: {
        empty: '이메일을 입력해 주세요.',
      },
      password: {
        empty: '비밀번호를 입력해 주세요.',
      },
      all: {
        empty: '이메일과 비밀번호를 입력해 주세요.',
      },
    };
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

  reset() {
    this.fields = {
      email: '',
      password: '',
    };

    this.errors = {
      email: '',
      password: '',
    };

    this.publish();
  }

  validate() {
    this.validateEmail();
    this.validatePassword();
    this.validateAllFields();

    this.publish();
  }

  validateEmail() {
    if (!this.fields.email.length) {
      this.errors.email = this.errorMessages.email.empty;

      return;
    }

    this.errors.email = '';
  }

  validatePassword() {
    if (!this.fields.password.length) {
      this.errors.password = this.errorMessages.password.empty;

      return;
    }

    this.errors.password = '';
  }

  validateAllFields() {
    if (!this.fields.email.length && !this.fields.password.length) {
      this.errors.all = this.errorMessages.all.empty;

      return;
    }

    this.errors.all = '';
  }

  get errorMessage() {
    if (this.errors.all) {
      return this.errors.all;
    }

    if (this.errors.email) {
      return this.errors.email;
    }

    if (this.errors.password) {
      return this.errors.password;
    }

    return '';
  }

  get isValidateSuccessful() {
    return !Object.values(this.errors).some((error) => error);
  }
}

export const loginFormStore = new LoginFormStore();

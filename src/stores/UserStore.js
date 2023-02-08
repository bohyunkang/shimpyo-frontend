import { apiService } from '../services/ApiService';
import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.signupStatus = '';
    this.loginStatus = '';

    this.user = '';
    this.nickname = '';
  }

  async signup({
    name, email, password, confirmPassword, nickname,
  }) {
    this.changeSignupStatus('processing');

    try {
      const { id } = await apiService.postUser({
        name, email, password, confirmPassword, nickname,
      });

      this.changeSignupStatus('successful');

      return id;
    } catch (e) {
      this.changeSignupStatus('failed');

      return '';
    }
  }

  async login({ email, password }) {
    this.changeLoginStatus('processing');

    try {
      const { accessToken, nickname } = await apiService.postSession({
        email, password,
      });

      this.changeLoginStatus('successful');

      return {
        accessToken,
        nickname,
      };
    } catch (e) {
      this.changeLoginStatus('failed');

      return '';
    }
  }

  async fetchUser() {
    const user = await apiService.fetchUser();

    this.user = user;
    this.publish();
  }

  changeSignupStatus(status) {
    this.signupStatus = status;
    this.publish();
  }

  changeLoginStatus(status) {
    this.loginStatus = status;
    this.publish();
  }

  resetSignupStatus() {
    this.signupStatus = '';
    this.publish();
  }

  resetLoginStatus() {
    this.loginStatus = '';
    this.publish();
  }

  get isSignupSuccessful() {
    return this.signupStatus === 'successful';
  }

  get isSignupFailed() {
    return this.signupStatus === 'failed';
  }

  get isLoginSuccessful() {
    return this.loginStatus === 'successful';
  }

  get isLoginFailed() {
    return this.loginStatus === 'failed';
  }
}

export const userStore = new UserStore();

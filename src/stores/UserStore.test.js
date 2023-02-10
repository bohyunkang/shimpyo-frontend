import UserStore from './UserStore';

const context = describe;

describe('UserStore', () => {
  let userStore;

  beforeEach(() => {
    userStore = new UserStore();
  });

  describe('signup', () => {
    context('제대로 된 정보로 회원가입을 시도할 때', () => {
      it('회원가입 성공', async () => {
        await userStore.signup({
          name: '강힐링',
          email: 'healing@shimpyo.com',
          password: 'Healing1234!',
          confirmPassword: 'Healing1234!',
          nickname: '힐링이필요해',
        });

        expect(userStore.isSignupSuccessful).toBeTruthy();
      });
    });

    context('잘못된 정보로 회원가입을 시도할 때', () => {
      it('회원가입 실패', async () => {
        await userStore.signup({
          name: 'x',
          email: 'xxx',
          password: 'xxx',
          confirmPassword: 'xxx',
          nickname: 'xx',
        });

        expect(userStore.isSignupFailed).toBeTruthy();
      });
    });
  });

  describe('login', () => {
    context('제대로 된 정보로 로그인을 시도할 때', () => {
      it('로그인 성공', async () => {
        await userStore.login({
          email: 'healing@shimpyo.com',
          password: 'Healing1234!',
        });

        expect(userStore.isLoginSuccessful).toBeTruthy();
        expect(userStore.isLoginSuccessful).toBeTruthy();
      });
    });

    context('잘못된 정보로 로그인을 시도할 때', () => {
      it('로그인 실패', async () => {
        await userStore.login({
          email: 'xxx',
          password: 'xxx',
        });

        expect(userStore.isLoginFailed).toBeTruthy();
      });
    });
  });
});

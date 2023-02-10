import { Link } from 'react-router-dom';

import useSignupFormStore from '../../hooks/useSignupFormStore';

export default function SignupSuccess() {
  const signupFormStore = useSignupFormStore();

  return (
    <div>
      <h2>
        {`${signupFormStore.fields.nickname}님`}
        <br />
        가입이 완료되었어요.
      </h2>
      <p>감사합니다. 쉼표와 함께 즐거운 힐링을 만들어가요.</p>
      <Link to="/login">힐링하러 가기</Link>
    </div>
  );
}

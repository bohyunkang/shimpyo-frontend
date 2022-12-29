import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { WhiteBack, BlackBack } from '../../../assets/icons/button';

const Button = styled.button`
  width: 11px;
  height: 19px;

  background-image: ${(props) => (props.color === 'white' ? `url(${WhiteBack})` : `url(${BlackBack})`)};
  background-repeat: no-repeat;
`;

export default function BackButton({ color }) {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Button
      type="button"
      name="뒤로 가기 버튼"
      color={color}
      onClick={handleClickBack}
    />
  );
}

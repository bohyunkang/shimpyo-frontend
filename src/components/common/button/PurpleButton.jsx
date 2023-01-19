import styled from 'styled-components';

import { ArrowDownPurple, ArrowUpPurple } from '../../../assets/icons/program';

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;

  color: ${({ theme }) => theme.textColors.purple};

  span {
    margin-right: 6px;

    vertical-align: sub;
  }

  img {
    width: 9px;
    height: 5px;
  }
`;

export default function PurpleButton({ text, onClick, iconDirection }) {
  const setIconDirection = (direction) => (direction ? ArrowUpPurple : ArrowDownPurple);

  return (
    <Button
      type="button"
      onClick={onClick}
    >
      <span>{text}</span>
      <img src={setIconDirection(iconDirection)} alt="화살표 아이콘" />
    </Button>
  );
}

import styled from 'styled-components';

import { ArrowDownPurple } from '../../../assets/icons/program';

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;

  color: ${({ theme }) => theme.textColors.purple};

  span {
    margin-right: 6px;

    vertical-align: sub;
  }
`;

export default function PurpleButton({ text }) {
  return (
    <Button type="button">
      <span>{text}</span>
      <img src={ArrowDownPurple} alt="화살표 아래 아이콘" />
    </Button>
  );
}

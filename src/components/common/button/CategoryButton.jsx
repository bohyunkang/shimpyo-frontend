import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MoreMini } from '../../../assets/icons/button';

const CategoryLink = styled(Link)`
  ${(({ theme }) => theme.flexBox('', 'space-between', 'baseline'))};
  width: 170px;
  height: 50px;

  padding: 15px 16px;

  border-radius: 8px;
  background-color: ${(({ theme }) => theme.colors.buttonBackground)};

  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 21px;
  }

  img {
    width: 7px;
    height: 12px;
  }
`;

export default function CategoryButton({ name, path }) {
  return (
    <CategoryLink to={path}>
      <p>{name}</p>
      <img src={MoreMini} alt="더보기 아이콘" />
    </CategoryLink>
  );
}

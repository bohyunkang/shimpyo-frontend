import styled from 'styled-components';

import CATEGORY_TYPE from '../../constants/category';
import CategoryButton from '../common/button/CategoryButton';

const ButtonList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export default function CategoryTypes() {
  return (
    <ButtonList>
      {CATEGORY_TYPE.map((item) => (
        <li key={item.id}>
          <CategoryButton
            name={item.name}
            path={item.path}
          />
        </li>
      ))}
    </ButtonList>
  );
}

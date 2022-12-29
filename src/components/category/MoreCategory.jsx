import styled from 'styled-components';

import CategoryButton from '../common/button/CategoryButton';

const ButtonList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export default function MoreCategory() {
  const MORE_ITEM = [
    {
      name: '인기 프로그램',
      path: '/programs?popular=true',
    },
    {
      name: '신규 프로그램',
      path: '/programs?newest=true',
    },
  ];

  return (
    <ButtonList>
      {MORE_ITEM.map((item) => (
        <li key={item.name}>
          <CategoryButton
            name={item.name}
            path={item.path}
          />
        </li>
      ))}
    </ButtonList>
  );
}

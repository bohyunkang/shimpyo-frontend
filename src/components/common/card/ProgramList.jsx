import styled from 'styled-components';

import ProgramItem from './ProgramItem';

export default function ProgramList() {
  return (
    <ListWrapper>
      <ProgramItem />
      <ProgramItem />
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 16px;

  background-color: ${(({ theme }) => theme.colors.cardBackground)};
`;

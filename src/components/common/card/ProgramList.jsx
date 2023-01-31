import styled from 'styled-components';

import ProgramItem from './ProgramItem';

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 16px;

  background-color: ${(({ theme }) => theme.colors.cardBackground)};
`;

export default function ProgramList({ programs }) {
  if (!programs) {
    return <p>로딩 중입니다..</p>;
  }

  return (
    <ListWrapper>
      {programs.map((program) => (
        <ProgramItem
          key={program.id}
          program={program}
        />
      ))}
    </ListWrapper>
  );
}

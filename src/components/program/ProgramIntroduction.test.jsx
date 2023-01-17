import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import ProgramIntroduction from './ProgramIntroduction';
import ProgramStore from '../../stores/ProgramStore';

test('ProgramIntroduction', async () => {
  const programStore = new ProgramStore();

  await programStore.fetchProgram({ id: 1 });

  const { program } = programStore;

  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ProgramIntroduction category={program.category} />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByRole(
      'heading',
      {
        level: 2,
        name: '프로그램 소개',
      },
    );
    screen.getByRole(
      'heading',
      {
        level: 3,
        name: '참된 나를 찾는 여행,\n템플스테이',
      },
    );
    screen.getByRole(
      'button',
      {
        name: '자세히 보기',
      },
    );
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import PlaceDescription from './PlaceDescription';
import ProgramStore from '../../stores/ProgramStore';

test('PlaceDescription', async () => {
  const programStore = new ProgramStore();

  await programStore.fetchProgram({ id: 1 });

  const { program } = programStore;

  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <PlaceDescription place={program.place} />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByRole(
      'heading',
      {
        level: 2,
        name: '스테이 소개',
      },
    );
    screen.getByRole('button');
    screen.getByText('더보기');
  });
});

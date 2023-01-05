import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { programStore } from '../../../stores/ProgramStore';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import ProgramList from './ProgramList';

test('ProgramList', async () => {
  await programStore.fetchPrograms();

  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ProgramList programs={programStore.programs} />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getAllByAltText(/프로그램 썸네일/);
    screen.getAllByRole('heading', { level: 4 });
    screen.getAllByRole('heading', { level: 5 });
  });
});

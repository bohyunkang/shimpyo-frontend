import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import ProgramDetailPage from './ProgramDetailPage';
import ProgramStore from '../../stores/ProgramStore';

test('ProgramDetailPage', async () => {
  const programStore = new ProgramStore();

  await programStore.fetchProgram({ id: 1 });

  render((
    <MemoryRouter initialEntries={['/programs/1']}>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <Routes>
          <Route path="/programs/:id" element={<ProgramDetailPage />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getAllByText(/체크인/);
    screen.getAllByText(/체크아웃/);
    screen.getByRole('button', { name: '예약하기' });
  });
});

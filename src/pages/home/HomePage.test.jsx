import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import HomePage from './HomePage';

test('HomePage', async () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <HomePage />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByText(/쉼표/);
  //   screen.getByRole('heading', { name: '인기 프로그램' });
  //   screen.getByRole('heading', { name: '신규 프로그램' });
  });
});

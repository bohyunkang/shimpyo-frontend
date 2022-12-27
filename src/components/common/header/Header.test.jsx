import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import Header from './Header';

test('Header', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <Header />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByText(/쉼표/);
});

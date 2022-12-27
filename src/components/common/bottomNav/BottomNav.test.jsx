import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import BottomNav from './BottomNav';

test('BottomNav', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <BottomNav />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByText(/힐링/);
  screen.getByText(/카테고리/);
  screen.getByText(/예약/);
  screen.getByText(/내 프로필/);
});

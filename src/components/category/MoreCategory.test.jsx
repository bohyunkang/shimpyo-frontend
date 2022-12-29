import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import MoreCategory from './MoreCategory';

test('MoreCategory', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <MoreCategory />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByText(/인기 프로그램/);
  screen.getByText(/신규 프로그램/);
});

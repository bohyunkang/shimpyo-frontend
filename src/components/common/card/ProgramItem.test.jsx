import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import ProgramItem from './ProgramItem';

test('ProgramItem', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ProgramItem />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByAltText(/프로그램 썸네일/);
  screen.getByRole('heading', { level: 4 });
  screen.getByRole('heading', { level: 5 });
});

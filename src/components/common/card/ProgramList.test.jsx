import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import ProgramList from './ProgramList';

test('ProgramList', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ProgramList />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getAllByAltText(/프로그램 썸네일/);
  screen.getAllByRole('heading', { level: 4 });
  screen.getAllByRole('heading', { level: 5 });
});

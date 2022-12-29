import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import CategoryTypes from './CategoryTypes';

test('CategoryTypes', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <CategoryTypes />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByText(/템플스테이/);
  screen.getByText(/팜스테이/);
  screen.getByText(/멍스테이/);
  screen.getByText(/체험스테이/);
  screen.getByText(/원데이클래스/);
});

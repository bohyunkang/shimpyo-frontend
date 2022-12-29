import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import MainTitle from './MainTitle';

test('MainTitle', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <MainTitle title="메인 타이틀입니다" />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByRole('heading', {
    level: 1,
    name: '메인 타이틀입니다',
  });
});

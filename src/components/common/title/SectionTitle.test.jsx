import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import SectionTitle from './SectionTitle';

test('SectionTitle', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <SectionTitle title="섹션 타이틀입니다" />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByRole('heading', {
    level: 3,
    name: '섹션 타이틀입니다',
  });
});

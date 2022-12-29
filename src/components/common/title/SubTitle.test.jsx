import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import SubTitle from './SubTitle';

test('SubTitle', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <SubTitle
          section="섹션 타이틀입니다"
          sub="서브 타이틀입니다"
        />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByRole('heading', {
    level: 3,
    name: '섹션 타이틀입니다',
  });
  screen.getByRole('heading', {
    level: 2,
    name: '서브 타이틀입니다',
  });
});

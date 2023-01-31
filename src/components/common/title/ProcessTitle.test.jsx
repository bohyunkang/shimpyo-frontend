import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import ProcessTitle from './ProcessTitle';

test('ProcessTitle', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ProcessTitle title="페이지 별 프로세스를 알려주는 타이틀입니다" />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByRole('heading', {
    level: 2,
    name: '페이지 별 프로세스를 알려주는 타이틀입니다',
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import CategoryPage from './CategoryPage';

test('CategoryPage', async () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <CategoryPage />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByText(/여기서 한 눈에/);
    screen.getByText(/확인하세요/);
    screen.getAllByText(/카테고리/);
    screen.getByText(/더보기/);
    screen.getByText(/전체 프로그램/);
  });
});

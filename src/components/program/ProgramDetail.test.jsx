import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import ProgramDetail from './ProgramDetail';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('ProgramDetail', async () => {
  render((
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <ProgramDetail />
    </ThemeProvider>
  ));

  await waitFor(() => {
    screen.getByText(/체크인/);
    screen.getByText(/체크아웃/);
    screen.getByRole('button', { name: '예약하기' });
  });
});

import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import PurpleButton from './PurpleButton';

const handleButton = jest.fn();

test('PurpleButton', async () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <PurpleButton
          text="더보기"
          onClick={handleButton}
          iconDirection
        />
      </ThemeProvider>
    </MemoryRouter>
  ));

  screen.getByRole('button', { name: '더보기 화살표 아이콘' });

  fireEvent.click(screen.getByRole('button', { name: '더보기 화살표 아이콘' }));

  await waitFor(() => {
    expect(handleButton).toBeCalled();
  });
});

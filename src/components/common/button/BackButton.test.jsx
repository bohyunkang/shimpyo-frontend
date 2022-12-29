import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import BackButton from './BackButton';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

const context = describe;

describe('BackButton', () => {
  function renderBackButton() {
    render((
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <BackButton />
      </ThemeProvider>
    ));
  }

  context('뒤로 가기 버튼 클릭', () => {
    it('렌더 여부', () => {
      renderBackButton();

      screen.getByRole('button');
    });

    it('클릭 시 이전 페이지로 이동한다', () => {
      renderBackButton();

      fireEvent.click(screen.getByRole('button'));

      expect(navigate).toBeCalledWith(-1);
    });
  });
});

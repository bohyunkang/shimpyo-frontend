import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import mixin from '../../styles/mixin';
import theme from '../../styles/theme';

import ReservationButton from './ReservationButton';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

const context = describe;

describe('ReservationButton', () => {
  function renderReservationButton() {
    render((
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ReservationButton />
      </ThemeProvider>
    ));
  }

  context('예약하기 버튼 클릭 시', () => {
    it('렌더 여부', () => {
      renderReservationButton();

      screen.getByRole('button', { name: '예약하기' });
    });

    // TODO: 예약 기능 만들 때 테스트 활성화
    // it('로그인한 경우 예약 페이지로 이동한다', () => {
    //   renderReservationButton();

    //   fireEvent.click(screen.getByRole('button'));

    //   expect(navigate).toBeCalled();
    // });

    // TODO: 회원가입/로그인 구현 후 테스트 활성화!
    // it('로그인하지 않은 경우 로그인 페이지로 이동한다', () => {
    //   renderReservationButton();

    //   fireEvent.click(screen.getByRole('button'));

    //   expect(navigate).toBeCalledWith('/login');
    // });
  });
});

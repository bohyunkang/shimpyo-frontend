import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import mixin from '../../styles/mixin';
import theme from '../../styles/theme';

import DateSetting from './DateSetting';

const context = describe;

describe('DateSetting', () => {
  function renderDateSetting() {
    render((
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <DateSetting />
      </ThemeProvider>
    ));
  }

  context('체크인 & 체크아웃 설정', () => {
    it('렌더 여부', () => {
      renderDateSetting();

      screen.getByText(/체크인/);
      screen.getByText(/체크아웃/);
      screen.getAllByRole('button');
    });

    it('체크인 & 체크아웃 버튼 클릭 시 날짜 설정 탭이 켜진다', () => {
      renderDateSetting();

      fireEvent.click(screen.getAllByRole('button')[0]);

      // TODO: 해당 테스트 진행 필요!
    });
  });
});

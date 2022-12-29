import {
  render, screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import SearchInput from './SearchInput';

const context = describe;

describe('SearchInput', () => {
  function renderSearchInput() {
    render((
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <SearchInput />
      </ThemeProvider>
    ));
  }

  context('뒤로 가기 버튼 클릭', () => {
    it('렌더 여부', () => {
      renderSearchInput();

      screen.getByPlaceholderText('어떤 힐링을 해볼까요?');
      screen.getByAltText('힐링 프로그램 검색 아이콘');
    });

    it('검색을 시도하는 경우', () => {});
  });
});

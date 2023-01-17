import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import PlaceLocation from './PlaceLocation';
import ProgramStore from '../../stores/ProgramStore';

test('PlaceLocation', async () => {
  const programStore = new ProgramStore();

  await programStore.fetchProgram({ id: 1 });

  const { program } = programStore;

  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <PlaceLocation place={program.place} />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByRole(
      'heading',
      {
        level: 2,
        name: '찾아오시는 길',
      },
    );
    screen.getByText('주소');
    screen.getByText('전라남도 강진군 도암면 백련사길 145');
    screen.getByText('전화');
    screen.getByText('055-862-4425');
    screen.getByText('픽업');
    screen.getByText('픽업 서비스를 제공하지 않는 스테이입니다. 숙소까지 이동 방법을 미리 점검해 주세요.');
    screen.getByRole('button', { name: '주소복사' });
    screen.getByText('대중교통 길 찾기');
  });
});

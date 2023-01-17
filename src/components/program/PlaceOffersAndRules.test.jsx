import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import PlaceOffersAndRules from './PlaceOffersAndRules';
import ProgramStore from '../../stores/ProgramStore';

test('PlaceOffersAndRules', async () => {
  const programStore = new ProgramStore();

  await programStore.fetchProgram({ id: 1 });

  const { program } = programStore;

  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <PlaceOffersAndRules
          offers={program.offers}
          time={program.place}
          rules={program.rules}
        />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByRole(
      'heading',
      {
        level: 2,
        name: '편의시설 및 서비스',
      },
    );
    screen.getByRole(
      'heading',
      {
        level: 2,
        name: '이용규칙',
      },
    );
    screen.getByText('체크인');
    screen.getByText('체크아웃');
    screen.getByText('주차가능');
    screen.getByText('여름에 소매 없는 옷과 무릎 위 짧은 바지는 삼가주세요.');
  });
});

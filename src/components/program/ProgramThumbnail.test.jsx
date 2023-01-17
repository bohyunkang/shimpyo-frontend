import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import mixin from '../../styles/mixin';

import ProgramThumbnail from './ProgramThumbnail';
import ProgramStore from '../../stores/ProgramStore';

test('ProgramThumbnail', async () => {
  const programStore = new ProgramStore();

  await programStore.fetchProgram({ id: 1 });

  const { program } = programStore;

  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ProgramThumbnail program={program} />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByRole(
      'heading',
      {
        level: 1,
        name: '[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책',
      },
    );
    screen.getAllByText(/70,000/);
    screen.getByRole(
      'heading',
      {
        level: 5,
        name: '전라남도 강진군 도암면 백련사길 145',
      },
    );
  });
});

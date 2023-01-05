import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { programStore } from '../../../stores/ProgramStore';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import ProgramItem from './ProgramItem';

test('ProgramItem', async () => {
  await programStore.fetchPrograms();

  const program = programStore.programs[0];

  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <ProgramItem key={program.id} program={program} />
      </ThemeProvider>
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getAllByAltText(/프로그램 썸네일/);
    screen.getAllByRole('heading', {
      level: 4,
      name: '[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책',
    });
    screen.getByText('70,000');
    screen.getByText('전라남도 강진군');
  });
});

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import mixin from '../../../styles/mixin';
import theme from '../../../styles/theme';

import CategoryButton from './CategoryButton';

test('CategoryButton', () => {
  render((
    <MemoryRouter>
      <ThemeProvider theme={{ ...theme, ...mixin }}>
        <CategoryButton />
      </ThemeProvider>
    </MemoryRouter>
  ));
});

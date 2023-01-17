import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

window.scrollTo = jest.fn();

test('App', () => {
  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));
});

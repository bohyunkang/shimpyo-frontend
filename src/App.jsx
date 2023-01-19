import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './styles/theme';
import mixin from './styles/mixin';
import GlobalStyle from './styles/GlobalStyle';

import HomePage from './pages/Home/HomePage';
import CategoryPage from './pages/Category/CategoryPage';
import ReservationPage from './pages/reservation/ReservationPage';
import ReservationHistoryPage from './pages/reservation/ReservationHistoryPage';
import ProfilePage from './pages/profile/ProfilePage';
import ProgramDetailPage from './pages/program/ProgramDetailPage';
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <Reset />
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<CategoryPage />} />
        <Route path="/programs/:id" element={<ProgramDetailPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/reservations" element={<ReservationHistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </ThemeProvider>
  );
}

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import useUserStore from './hooks/useUserStore';

import theme from './styles/theme';
import mixin from './styles/mixin';
import GlobalStyle from './styles/GlobalStyle';

import ProtectedRoute from './ProtectedRoute';

import HomePage from './pages/Home/HomePage';
import CategoryPage from './pages/Category/CategoryPage';
import ProgramDetailPage from './pages/program/ProgramDetailPage';
import ReservationPage from './pages/reservation/ReservationPage';
import ReservationHistoryPage from './pages/reservation/ReservationHistoryPage';
import ReservationDetailPage from './pages/reservation/ReservationDetailPage';
import ProfilePage from './pages/profile/ProfilePage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import ScrollToTop from './components/common/ScrollToTop';
import { apiService } from './services/ApiService';

export default function App() {
  const [accessToken] = useLocalStorage('accessToken', '');

  const userStore = useUserStore();

  useEffect(() => {
    // TODO: 프로세스 확인 필요!
    apiService.setAccessToken(accessToken);

    if (accessToken) {
      userStore.fetchUser();
    }
  }, [accessToken]);

  return (
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <Reset />
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/programs" element={<CategoryPage />} />
        <Route path="/programs/:id" element={<ProgramDetailPage />} />
        <Route path="/reservations/:id" element={<ReservationDetailPage />} />
        <Route
          path="/reservation"
          element={(
            <ProtectedRoute accessToken={accessToken}>
              <ReservationPage />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/reservations"
          element={(
            <ProtectedRoute accessToken={accessToken}>
              <ReservationHistoryPage />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profile"
          element={(
            <ProtectedRoute accessToken={accessToken}>
              <ProfilePage />
            </ProtectedRoute>
          )}
        />
      </Routes>
    </ThemeProvider>
  );
}

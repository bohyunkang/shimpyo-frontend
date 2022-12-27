import {
  Home,
  HomeOn,
  Category,
  CategoryOn,
  Reservation,
  ReservationOn,
  Profile,
  ProfileOn,
} from '../assets/icons/bottomNav';

const NAV_ITEM = [
  {
    name: '힐링',
    path: '/',
    activeIcon: HomeOn,
    inactiveIcon: Home,
  },
  {
    name: '카테고리',
    path: '/programs',
    activeIcon: CategoryOn,
    inactiveIcon: Category,
  },
  {
    name: '예약',
    path: '/reservations',
    activeIcon: ReservationOn,
    inactiveIcon: Reservation,
  },
  {
    name: '내 프로필',
    path: '/profile',
    activeIcon: ProfileOn,
    inactiveIcon: Profile,
  },
];

export default NAV_ITEM;

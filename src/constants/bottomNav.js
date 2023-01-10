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
    id: 1,
    name: '힐링',
    path: '/',
    activeIcon: HomeOn,
    inactiveIcon: Home,
  },
  {
    id: 2,
    name: '카테고리',
    path: '/programs',
    activeIcon: CategoryOn,
    inactiveIcon: Category,
  },
  {
    id: 3,
    name: '예약',
    path: '/reservations',
    activeIcon: ReservationOn,
    inactiveIcon: Reservation,
  },
  {
    id: 4,
    name: '내 프로필',
    path: '/profile',
    activeIcon: ProfileOn,
    inactiveIcon: Profile,
  },
];

export default NAV_ITEM;

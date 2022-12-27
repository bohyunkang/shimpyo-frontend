import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Logo, Search } from '../../../assets/icons/header';

const Container = styled.div`
  ${(({ theme }) => theme.flexBox('row', 'space-between', 'center'))};

  padding: 20px;
`;

const LogoWrapper = styled.h1`
  width: 101px;
  height: 19px;
`;

const HomeLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;

  background: url(${Logo}) no-repeat 0 50%;
  background-size: contain;

  text-indent: -10000px;
`;

const SearchWrapper = styled.div`
  width: 22px;
  height: 22px;

  img {
    width: 100%;
  }
`;

export default function Header() {
  return (
    <Container>
      <LogoWrapper>
        <HomeLink to="/">
          쉼표 SHIMPYO
        </HomeLink>
      </LogoWrapper>
      <Link to="/search">
        <SearchWrapper>
          <img src={Search} alt="검색 아이콘" />
        </SearchWrapper>
      </Link>
    </Container>
  );
}
